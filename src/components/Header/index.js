import React from 'react'
import PageTitle from 'libe-components/lib/text-levels/PageTitle'
import LibeLaboLogo from 'libe-components/lib/blocks/LibeLaboLogo'
import ArticleMeta from 'libe-components/lib/blocks/ArticleMeta'

/*
 *   Header
 *   ------------------------------------------------------
 *
 *   PROPS
 *   -
 *   
 */

export default function Header (props) {
  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-header'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    <div className={`${c}_desktop`}>
      <div className={`${c}_desktop-left`}>
        <PageTitle small>
          <span>PRIMAIRES DÉMOCRATES</span>
          <span>LA COURSE À L'INVESTITURE</span>
        </PageTitle>
      </div>
      <div className={`${c}_desktop-right`}>
        <LibeLaboLogo />
        <ArticleMeta
          authors={[
            { name: 'Baptiste Bouthier', role: 'Réalisation' },
            { name: 'Clara de Alberto', role: 'Réalisation' },
            { name: 'Maxime Fabas', role: 'Réalisation' },
          ]} />
      </div>
    </div>
    <div className={`${c}_mobile`}>
      <PageTitle small>
        <span>PRIMAIRES DÉMOCRATES</span>
        <span>LA COURSE À L'INVESTITURE</span>
      </PageTitle>
      <LibeLaboLogo />
      <ArticleMeta
        authors={[
          { name: 'Baptiste Bouthier', role: 'Réalisation' },
          { name: 'Clara de Alberto', role: 'Réalisation' },
          { name: 'Maxime Fabas', role: 'Réalisation' },
        ]} />
    </div>
  </div>
}
