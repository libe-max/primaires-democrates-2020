import React, { useState } from 'react'
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
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { prop } = props
  const [state, setState] = useState(null)

  /* * * * * * * * * * * * * * * *
   *
   * ACTION HANDLERS
   *
   * * * * * * * * * * * * * * * */

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
    <PageTitle>
      <span>PRIMAIRES DÉMOCRATES</span>
      <span>LA COURSE À L'INVESTITURE</span>
    </PageTitle>
    <ArticleMeta
      publishedOn='02/09/2019 17:13'
      updatedOn='03/09/2019 10:36'
      authors={[
        { name: 'Jean-Sol Partre', role: '', link: 'www.liberation.fr' },
        { name: 'Maxime Fabas', role: 'Production', link: 'lol.com' }
      ]} />
    <LibeLaboLogo target='blank' />
  </div>
}
