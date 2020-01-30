import React, { useEffect } from 'react'
import Candidate from '../Candidate'

/*
 *   Scores
 *   ------------------------------------------------------
 *
 *   PROPS
 *   candidates, activateCandidate
 *
 *   PROPS FROM REACT-IN-VIEWPORT
 *   inViewport, forwardedRef
 *   
 */

export default function Scores (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { candidates, activateCandidate, inViewport, forwardedRef } = props

   /* * * * * * * * * * * * * * * *
   *
   * INNER LOGIC
   *
   * * * * * * * * * * * * * * * */
  const reducedScoreCandidates = candidates.map(candidate => ({
    ...candidate,
    _total_score: candidate._scores.reduce((curr, state) => curr + Number(state.delegates || 0), 0)
  }))
  const maxScore = Math.max(...reducedScoreCandidates.map(candidate => candidate._total_score))
  const sortedCandidates = [...reducedScoreCandidates].sort((canA, canB) => canB._total_score - canA._total_score)

  /* * * * * * * * * * * * * * * *
   *
   * EFFECTS
   *
   * * * * * * * * * * * * * * * */
  useEffect(() => {
    const $scores = document.querySelector('.primaires-democrates-scores')
    if (!$scores) return
    const $candidates = [...$scores.querySelectorAll('.primaires-democrates-candidate')]
    if (!$candidates) return
    $candidates.forEach(($candidate, i) => {
      const target = Number($candidate.getAttribute('data-relative-score')) * 100
      const $gauge = $candidate.querySelector('.primaires-democrates-candidate__score-gauge')
      if (!target && target !== 0) return
      if (!$gauge) return

      // In viewport and Element.prototype.animation is supported
      if (inViewport && Element.prototype.animate) {
        const animation = $gauge.animate([
          { width: '0%' },
          { width: `${target}%` }
        ], {
          duration: 400,
          delay: 200 + (i * 50),
          easing: 'ease-out'
        })
        animation.onfinish = () => $gauge.style.width = `${target}%`

      // In viewport and Element.prototype.animation is NOT supported
      } else if (inViewport) {
        $gauge.style.width = `${target}%`

      // Out of viewport
      } else {
        $gauge.style.width = '0%'
      }
    })
  }, [inViewport])

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
  return <div
    ref={forwardedRef}
    className={classes.join(' ')}>
    {sortedCandidates.map((candidate, i) => (
      <Candidate
        isFirst={i === 0}
        key={candidate.id}
        percentScore={candidate._total_score / maxScore}
        activateCandidate={activateCandidate}
        value={candidate} />
      )
    )}
  </div>
}
