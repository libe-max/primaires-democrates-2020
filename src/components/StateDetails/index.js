import React from 'react'
import moment from 'moment'
import BlockTitle from 'libe-components/lib/text-levels/BlockTitle'
import Paragraph from 'libe-components/lib/text-levels/Paragraph'

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
   * LOGIC
   *
   * * * * * * * * * * * * * * * */
  const displayDate = state ? moment(state.date, 'DD/MM/YYYY').format('DD MMMM') : null
  const displayName = state ? state.name : null
  const scores = candidates.map(candidate => {
    const score = candidate._scores.find(score => score.state === state.id)
    return {
      id: candidate.id,
      name: candidate.name,
      short_name: candidate.short_name,
      delegates: score ? score.delegates : 0,
      percentage: score ? score.percentage : 0
    }
  })
  const sortedScores = scores.sort((scoreA, scoreB) => {
    return scoreB.delegates - scoreA.delegates
      || scoreB.percentage - scoreA.percentage
  })
  const maxDelegates = Math.max(...sortedScores.map(score => score.delegates))

  /* * * * * * * * * * * * * * * *
   *
   * HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleCandidateClick (e, id) {
    if (id === 'other') return
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
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    <div className={`${c}__head`}>
      <div className={`${c}__date`}>
        <BlockTitle level={10}>
          {displayDate}&nbsp;-&nbsp;
        </BlockTitle>
      </div>
      <div className={`${c}__name`}>
        <BlockTitle level={10}>
          {displayName}
        </BlockTitle>
      </div>
    </div>

    <div className={`${c}__scores`}>
      {sortedScores.map(score => (
        <div
          key={score.id}
          className={`${c}__candidate-score`}
          onClick={e => handleCandidateClick(e, score.id)}>
          <Paragraph>
            <span className={`${c}__candidate-name`}>{score.short_name}</span>
            <span className={`${c}__candidate-percentage`}>{Math.floor(score.percentage * 1000) / 10}%</span>
            <span className={`${c}__candidate-delegates`}>{score.delegates} délégué{score.delegates > 1 ? 's' : ''}</span>
          </Paragraph>
          <div
            className={`${c}__candidate-score-gauge`}
            style={{ width: `${100 * score.delegates / (maxDelegates || 1)}%` }}>
            {score.name}
          </div>
        </div>
      ))}
    </div>
  </div>
}
