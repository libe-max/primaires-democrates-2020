import React from 'react'
import Explanations from '../Explanations'
import CandidateBio from '../CandidateBio'
import StateDetails from '../StateDetails'

/*
 *   DetailPanel
 *   ------------------------------------------------------
 *
 *   PROPS
 *   mode, content, candidates, states, close,
 *   activateCandidate
 *   
 */

export default function DetailPanel (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { mode, content, candidates, states, close, activateCandidate } = props

  /* * * * * * * * * * * * * * * *
   *
   * HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleButtonClick (e) {
    if (e && e.preventDefault) e.preventDefault()
    if (close) close()
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
    style={{ top: `${window.LBLB_GLOBAL.nav_height}px` }}
    className={classes.join(' ')}>
    <button onClick={handleButtonClick}>CLOSE</button>
    {child}
  </div>
}
