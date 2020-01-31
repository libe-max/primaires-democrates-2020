import React from 'react'
import BlockTitle from 'libe-components/lib/text-levels/BlockTitle'

/*
 *   Candidate
 *   ------------------------------------------------------
 *
 *   PROPS
 *   value, activateCandidate, isFirst, percentScore
 *   
 */

export default function Candidate (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { value, activateCandidate, isFirst, percentScore } = props

  /* * * * * * * * * * * * * * * *
   *
   * ACTION HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleClick (e) {
    if (value.id === 'other') return
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
    className={classes.join(' ')}
    data-relative-score={percentScore}>
    <div className={`${c}__score-gauge-range`}>
      <div className={`${c}__score-gauge`}>
        {value.score}
      </div>
    </div>
    <div
      className={`${c}__photo`}
      style={{backgroundImage: `url(${value.photo})`}}>
      {value.name}
    </div>
    <span className={`${c}__name`}>
      <BlockTitle level={10}>{value.short_name}</BlockTitle>
    </span>
    <span className={`${c}__score`}>
      <BlockTitle level={10}>{
        isFirst ? `${score} délégués` : score
      }</BlockTitle>
    </span>
  </div>
}
