import React from 'react'
import Candidate from '../Candidate'

/*
 *   Scores
 *   ------------------------------------------------------
 *
 *   PROPS
 *   candidates, activateCandidate
 *   
 */

export default function Scores (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { candidates, activateCandidate } = props

   /* * * * * * * * * * * * * * * *
   *
   * INNER LOGIC
   *
   * * * * * * * * * * * * * * * */
  const sortedCandidates = candidates.sort((canA, canB) => {
    const scoreCanA = canA._scores.reduce((curr, state) => curr + Number(state.delegates || 0), 0)
    const scoreCanB = canB._scores.reduce((curr, state) => curr + Number(state.delegates || 0), 0)
    return scoreCanB - scoreCanA
  })

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-scores'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    {candidates.map(candidate => <Candidate
      key={candidate.id}
      activateCandidate={activateCandidate}
      value={candidate} />)}
  </div>
}
