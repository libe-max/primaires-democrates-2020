import React, { useState } from 'react'

/*
 *   DetailPanel
 *   ------------------------------------------------------
 *
 *   PROPS
 *   detailPanelMode, detailPanelContent
 *   
 */

export default function DetailPanel (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { detailPanelMode, detailPanelContent } = props
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
  const c = 'primaires-democrates-detail-panel'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    DETAIL PANEL<br />
    detailPanelMode: {`${detailPanelMode}`}<br />
    detailPanelContent: {`${detailPanelContent}`}
  </div>
}
