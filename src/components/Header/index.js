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
}
