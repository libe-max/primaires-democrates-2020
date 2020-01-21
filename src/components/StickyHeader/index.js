import React, { useState } from 'react'
import PageTitle from 'libe-components/lib/text-levels/PageTitle'

/*
 *   StickyHeader
 *   ------------------------------------------------------
 *
 *   PROPS
 *   -
 *   
 */

export default function StickyHeader (props) {
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
  const c = 'primaires-democrates-sticky-header'
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
  </div>
}
