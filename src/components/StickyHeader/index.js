import React from 'react'

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
    <div>
      <span>PRIMAIRES DÉMOCRATES</span>
      <span>LA COURSE À L'INVESTITURE</span>
    </div>
  </div>
}
