import React from 'react'
import moment from 'moment'

/*
 *   StateDetails
 *   ------------------------------------------------------
 *
 *   PROPS
 *   state, candidates, activateCandidate
 *   
 */

export default function StateDetails (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { state, candidates, activateCandidate } = props

  /* * * * * * * * * * * * * * * *
   *
   * HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleCandidateClick (e, id) {
    if (activateCandidate) activateCandidate(id)
  }

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-state-details'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * LOGIC
   *
   * * * * * * * * * * * * * * * */
  const displayDate = state ? moment(state.date, 'DD/MM/YYYY').format('DD MMMM') : null
  const displayName = state ? state.name : null
  const scores = candidates.map(candidate => {
    const score = candidate._scores.find(score => score.state === state)
    return {
      id: candidate.id,
      name: candidate.name,
      delegates: score ? score.delegates : 0,
      percentage: score ? score.percentage : 0
    }
  })
  const sortedScores = scores.sort((scoreA, scoreB) => {
    return scoreB.delegates - scoreA.delegates
  })

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    <span>{displayDate}</span>
    <span>{displayName}</span>
    <div>
      {sortedScores.map(score => {
        return <div
          key={score.id}
          onClick={e => handleCandidateClick(e, score.id)}>
          <span>{score.name}</span>
          <span>{score.percentage}</span>
          <span>{score.delegates} délégués</span>
        </div>
      })}
    </div>
  </div>
}
