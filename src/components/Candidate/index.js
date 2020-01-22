import React from 'react'

/*
 *   Candidate
 *   ------------------------------------------------------
 *
 *   PROPS
 *   value, activateCandidate
 *   
 */

export default function Candidate (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { value, activateCandidate } = props

  /* * * * * * * * * * * * * * * *
   *
   * ACTION HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleClick (e) {
    if (activateCandidate && value.id) activateCandidate(value.id)
  }

   /* * * * * * * * * * * * * * * *
   *
   * INNER LOGIC
   *
   * * * * * * * * * * * * * * * */
  const score = value._scores.reduce((curr, state) => curr + Number(state.delegates || 0), 0)

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-candidate'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div
    onClick={handleClick}
    className={classes.join(' ')}>
    <span>{value.name}</span>
    <span>{score} délégués</span>
  </div>
}
