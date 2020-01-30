import React, { Component } from 'react'
import moment from 'moment'
import handleViewport from 'react-in-viewport'
import { parseTsv } from 'libe-utils'
import Loader from 'libe-components/lib/blocks/Loader'
import LoadingError from 'libe-components/lib/blocks/LoadingError'
import ShareArticle from 'libe-components/lib/blocks/ShareArticle'
import LibeLaboLogo from 'libe-components/lib/blocks/LibeLaboLogo'
import ArticleMeta from 'libe-components/lib/blocks/ArticleMeta'
import Header from './components/Header'
import StickyHeader from './components/StickyHeader'
import Intro from './components/Intro'
import Scores from './components/Scores'
import Calendar from './components/Calendar'
import Navigation from './components/Navigation'
import ReadAlso from './components/ReadAlso'
import DetailPanel from './components/DetailPanel'
const ViewportScores = handleViewport(Scores)

export default class App extends Component {
  /* * * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'primaires-democrates'
    this.state = {
      loading_sheet: true,
      error_sheet: null,
      data_sheet: {
        candidates: [],
        states: [],
        links: [],
      },
      active_page: 'scores',
      show_detail_panel: false,
      detail_panel_mode: null,
      detail_panel_content: null,
      keystrokes_history: [],
      konami_mode: false
    }
    this.fetchSheet = this.fetchSheet.bind(this)
    this.fetchCredentials = this.fetchCredentials.bind(this)
    this.listenToKeyStrokes = this.listenToKeyStrokes.bind(this)
    this.watchKonamiCode = this.watchKonamiCode.bind(this)
    this.showExplanations = this.showExplanations.bind(this)
    this.activateCandidate = this.activateCandidate.bind(this)
    this.activateState = this.activateState.bind(this)
    this.closeDetailPanel = this.closeDetailPanel.bind(this)
    this.scrollToContentStart = this.scrollToContentStart.bind(this)
    this.activateScores = this.activateScores.bind(this)
    this.activateCalendar = this.activateCalendar.bind(this)
  }

  /* * * * * * * * * * * * * * * * *
   *
   * DID MOUNT
   *
   * * * * * * * * * * * * * * * * */
  componentDidMount () {
    document.addEventListener('keydown', this.listenToKeyStrokes)
    this.fetchCredentials()
    if (this.props.spreadsheet) return this.fetchSheet()
    return this.setState({ loading_sheet: false })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * WILL UNMOUNT
   *
   * * * * * * * * * * * * * * * * */
  componentWillUnmount () {
    document.removeEventListener('keydown', this.listenToKeyStrokes)
  }

  /* * * * * * * * * * * * * * * * *
   *
   * FETCH CREDENTIALS
   *
   * * * * * * * * * * * * * * * * */
  async fetchCredentials () {
    const { api_url } = this.props
    const { format, article } = this.props.tracking
    const api = `${api_url}/${format}/${article}/load`
    try {
      const reach = await window.fetch(api, { method: 'POST' })
      const response = await reach.json()
      const { lblb_tracking, lblb_posting } = response._credentials
      if (!window.LBLB_GLOBAL) window.LBLB_GLOBAL = {}
      window.LBLB_GLOBAL.lblb_tracking = lblb_tracking
      window.LBLB_GLOBAL.lblb_posting = lblb_posting
      return { lblb_tracking, lblb_posting }
    } catch (error) {
      console.error('Unable to fetch credentials:')
      console.error(error)
      return Error(error)
    }
  }

  /* * * * * * * * * * * * * * * * *
   *
   * FETCH SHEET
   *
   * * * * * * * * * * * * * * * * */
  async fetchSheet () {
    this.setState({ loading_sheet: true, error_sheet: null })
    const sheet = this.props.spreadsheet
    try {
      const reach = await window.fetch(this.props.spreadsheet)
      if (!reach.ok) throw reach
      const data = await reach.text()
      const [candidates, states, links] = parseTsv(data, [63, 5, 2])
      const transformedCandidates = candidates.map(candidate => {
        const result = { _scores: [] }
        Object.keys(candidate).forEach(key => {
          if (key.match(/^id|name|bio|photo|racing$/)) result[key] = candidate[key]
          else {
            const splValue = candidate[key].split(';')
            result._scores.push({
              state: key,
              delegates: Number((splValue[0] || '0').trim()),
              percentage: Number((splValue[1] || '0%').trim().replace(/%/igm, '')) / 100
            })
          }
        })
        return result
      })
      this.setState({
        loading_sheet: false,
        error_sheet: null,
        data_sheet: {
          candidates: transformedCandidates,
          states,
          links
        }
      })
      return data
    } catch (error) {
      if (error.status) {
        const text = `${error.status} error while fetching : ${sheet}`
        this.setState({ loading_sheet: false, error_sheet: error })
        console.error(text, error)
        return Error(text)
      } else {
        this.setState({ loading_sheet: false, error_sheet: error })
        console.error(error)
        return Error(error)
      }
    }
  }

  /* * * * * * * * * * * * * * * * *
   *
   * START LISTENING KEYSTROKES
   *
   * * * * * * * * * * * * * * * * */
  listenToKeyStrokes (e) {
    if (!e || !e.keyCode) return
    const currHistory = this.state.keystrokes_history
    const newHistory = [...currHistory, e.keyCode]
    this.setState({ keystrokes_history: newHistory })
    this.watchKonamiCode()
  }

  /* * * * * * * * * * * * * * * * *
   *
   * WATCH KONAMI CODE
   *
   * * * * * * * * * * * * * * * * */
  watchKonamiCode () {
    const konamiCodeStr = '38,38,40,40,37,39,37,39,66,65'
    const lastTenKeys = this.state.keystrokes_history.slice(-10)
    if (lastTenKeys.join(',') === konamiCodeStr) this.setState({ konami_mode: true })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * SHOW EXPLANATIONS
   *
   * * * * * * * * * * * * * * * * */
  showExplanations () {
    this.setState({
      show_detail_panel: true,
      detail_panel_mode: 'explanations',
      detail_panel_content: null
    })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * ACTIVATE CANDIDATE
   *
   * * * * * * * * * * * * * * * * */
  activateCandidate (id) {
    this.setState({
      show_detail_panel: true,
      detail_panel_mode: 'candidate',
      detail_panel_content: id
    })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * ACTIVATE STATE
   *
   * * * * * * * * * * * * * * * * */
  activateState (id) {
    this.setState({
      show_detail_panel: true,
      detail_panel_mode: 'state',
      detail_panel_content: id
    })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * CLOSE DETAIL PANEL
   *
   * * * * * * * * * * * * * * * * */
  closeDetailPanel () {
    this.setState({
      show_detail_panel: false
    })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * ACTIVATE SCORES
   *
   * * * * * * * * * * * * * * * * */
  activateScores () {
    this.setState({
      active_page: 'scores',
      show_detail_panel: false
    }, () => {
      if (window.LBLB_GLOBAL.current_display !== 'lg') {
        this.scrollToContentStart()
      }
    })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * ACTIVATE CALENDAR
   *
   * * * * * * * * * * * * * * * * */
  activateCalendar () {
    this.setState({
      active_page: 'calendar',
      show_detail_panel: false
    }, () => {
      if (window.LBLB_GLOBAL.current_display !== 'lg') {
        this.scrollToContentStart()
      }
    })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * SCROLL TO CONTENT START
   *
   * * * * * * * * * * * * * * * * */
  scrollToContentStart () {
    const $intro = document.querySelector('.primaires-democrates-intro')
    if (!$intro) return
    const navHeight = window.LBLB_GLOBAL.nav_height
    window.scroll({
      top: $intro.offsetTop - navHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * * */
  render () {
    const { c, state, props } = this

    /* Assign classes */
    const classes = [c]
    if (state.loading_sheet) classes.push(`${c}_loading`)
    if (state.error_sheet) classes.push(`${c}_error`)
    if (state.show_detail_panel) classes.push(`${c}_show-detail-panel`)
    if (!state.show_detail_panel && state.active_page === 'scores') classes.push(`${c}_scores-is-active`)
    else if (!state.show_detail_panel && state.active_page === 'calendar') classes.push(`${c}_calendar-is-active`)
    else if (state.show_detail_panel && state.active_page === 'scores') classes.push(`${c}_go-back-to-scores`)
    else if (state.show_detail_panel && state.active_page === 'calendar') classes.push(`${c}_go-back-to-calendar`)

    /* Load & errors */
    if (state.loading_sheet) return <div className={classes.join(' ')}><div className='lblb-default-apps-loader'><Loader /></div></div>
    if (state.error_sheet) return <div className={classes.join(' ')}><div className='lblb-default-apps-error'><LoadingError /></div></div>

    /* Inner logic */
    const today = moment().endOf('day')
    const transformedStates = state.data_sheet.states.map(state => {
      const voteDate = moment(state.date, 'DD/MM/YYYY')
      return { ...state, _passed: voteDate < today }
    })
    const totalDelegates = transformedStates.reduce((total, state) => total + Number(state.nb_delegates), 0)
    const electDelegate = transformedStates.reduce((total, state) => state._passed ? total + Number(state.nb_delegates) : total, 0)
    const advancement = electDelegate / totalDelegates

    /* Prevent body scroll when details is open */
    const $body = document.querySelector('body')
    if ($body && state.show_detail_panel) $body.classList.add('body_prevent-scroll')
    else if ($body && !state.show_detail_panel) $body.classList.remove('body_prevent-scroll')

    /* Display component */
    return <div className={classes.join(' ')}>
      <Header scrollToContentStart={this.scrollToContentStart} />
      <StickyHeader />
      <Intro
        advancement={advancement}
        showExplanations={this.showExplanations} />
      <ViewportScores
        candidates={state.data_sheet.candidates}
        activateCandidate={this.activateCandidate} />
      <Calendar
        states={state.data_sheet.states}
        activateState={this.activateState} />
      <Navigation
        activateScores={this.activateScores}
        activateCalendar={this.activateCalendar} />
      <DetailPanel
        close={this.closeDetailPanel}
        activateCandidate={this.activateCandidate}
        mode={state.detail_panel_mode}
        content={state.detail_panel_content}
        candidates={state.data_sheet.candidates}
        states={state.data_sheet.states} />
      <div className='lblb-default-apps-footer'>
        <ShareArticle
          short
          iconsOnly
          tweet={props.meta.tweet}
          url={props.meta.url} />
        <ArticleMeta
          publishedOn='02/09/2019 17:13'
          updatedOn='03/09/2019 10:36'
          authors={[
            { name: 'Jean-Sol Partre', role: '', link: 'www.liberation.fr' },
            { name: 'Maxime Fabas', role: 'Production', link: 'lol.com' }
          ]} />
        <LibeLaboLogo target='blank' />
      </div>
    </div>
  }
}
