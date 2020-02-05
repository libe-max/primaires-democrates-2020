import React from 'react'
import PageTitle from 'libe-components/lib/text-levels/PageTitle'
import LibeLaboLogo from 'libe-components/lib/blocks/LibeLaboLogo'
import ArticleMeta from 'libe-components/lib/blocks/ArticleMeta'
import Svg from 'libe-components/lib/primitives/Svg'
import { statics_url as staticsUrl } from '../../config'

/*
 *   Header
 *   ------------------------------------------------------
 *
 *   PROPS
 *   scrollToContentStart
 *   
 */

export default function Header (props) {
  /* * * * * * * * * * * * * * * *
   *
   * STATE & PROPS
   *
   * * * * * * * * * * * * * * * */
  const { scrollToContentStart } = props

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-header'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleScrollButtonClick (e) {
    if (e && e.preventDefault) e.preventDefault()
    if (scrollToContentStart) scrollToContentStart()
  }

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    <div className={`${c}_desktop`}>
      <div className={`${c}_desktop-left`}>
        <PageTitle>
          <span>Primaires démocrates</span>
          <span>La course à l'investiture</span>
        </PageTitle>
      </div>
      <div className={`${c}_desktop-right`}>
        <LibeLaboLogo />
        <ArticleMeta
          authors={[
            { name: 'Baptiste Bouthier', role: 'Réalisation' },
            { name: 'Clara Dealberto', role: 'Réalisation' },
            { name: 'Maxime Fabas', role: 'Réalisation' },
          ]} />
      </div>
    </div>
    <div className={`${c}_mobile`}>
      <PageTitle>
        <span>Primaires démocrates</span>
        <span>la course à l'investiture</span>
      </PageTitle>
      <LibeLaboLogo />
      <ArticleMeta
        authors={[
          { name: 'Baptiste Bouthier', role: 'Réalisation' },
          { name: 'Clara Dealberto', role: 'Réalisation' },
          { name: 'Maxime Fabas', role: 'Réalisation' },
        ]} />
      <button onClick={handleScrollButtonClick}>
        <Svg src={`${staticsUrl}/assets/down-arrow-head-icon_24.svg`} />
      </button>
    </div>
  </div>
}
