import React from 'react'
import Svg from 'libe-components/lib/primitives/Svg'
import BlockTitle from 'libe-components/lib/text-levels/BlockTitle'
import Explanations from '../Explanations'
import CandidateBio from '../CandidateBio'
import StateDetails from '../StateDetails'
import { statics_url as staticsUrl } from '../../config'

/*
 *   DetailPanel
 *   ------------------------------------------------------
 *
 *   PROPS
 *   mode, content, candidates, states, close,
 *   activateCandidate, links
 *   
 */

export default function DetailPanel (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { mode, content, candidates, states, close, activateCandidate, links } = props

  /* * * * * * * * * * * * * * * *
   *
   * HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleButtonClick (e) {
    if (e && e.preventDefault) e.preventDefault()
    if (close) close()
  }

  function handleBackgroundClick (e) {
    if (e && e.preventDefault) e.preventDefault()
    if (e.target === e.currentTarget && close) close()
  }

  function handleInnerClick (e) {
    if (e && e.preventDefault) e.preventDefault()
    if (e.target === e.currentTarget && close) close()
  }

  /* * * * * * * * * * * * * * * *
   *
   * LOGIC
   *
   * * * * * * * * * * * * * * * */
  let child = null
  if (mode === 'explanations') child = <Explanations />
  else if (mode === 'candidate') child = <CandidateBio
    candidate={candidates.find(candidate => candidate.id === content)} />
  else if (mode === 'state') child = <StateDetails
    candidates={candidates}
    activateCandidate={activateCandidate}
    state={states.find(state => state.id === content)} />

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-detail-panel'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div
    onClick={handleBackgroundClick}
    style={{ top: `${window.LBLB_GLOBAL.nav_height}px` }}
    className={classes.join(' ')}>
    <div
      onClick={handleInnerClick}
      className={`${c}__inner-1`}>
      <div className={`${c}__inner-2`}>
        <button
          onClick={handleButtonClick}
          className={`${c}__close`}>
          <Svg src={`${staticsUrl}/assets/tilted-cross-icon_40.svg`} />
        </button>
        {child}
        <div className={`${c}__read-also`}>
          <BlockTitle level={10}>À lire aussi</BlockTitle>
          <div className={`${c}__links`}>{
            (links || []).map(link => (
              <a
                key={link.title}
                href={link.url}
                target='_blank'
                className={`${c}__link`}>
                <BlockTitle level={10}>
                  <span className={`${c}__link-slug`}>
                    {link.slug}
                  </span>
                  <span className={`${c}__link-title`}>
                    {link.title}
                  </span>
                </BlockTitle>
              </a>
            ))
          }</div>
        </div>
      </div>
    </div>
  </div>
}
