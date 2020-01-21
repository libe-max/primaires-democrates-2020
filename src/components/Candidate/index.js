import React, { useState } from 'react'
import Paragraph from 'libe-components/lib/text-levels/Paragraph'
import ParagraphTitle from 'libe-components/lib/text-levels/ParagraphTitle'

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
  const [state, setState] = useState(null)

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
    <img src={value.photo} />
    <ParagraphTitle>{value.name}</ParagraphTitle>
    <Paragraph>{score} délégués</Paragraph>
  </div>
}
