import React from 'react'
import Paragraph from 'libe-components/lib/text-levels/Paragraph'

/*
 *   Navigation
 *   ------------------------------------------------------
 *
 *   PROPS
 *   activateScores, activateCalendar
 *   
 */

export default function Navigation (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS
   *
   * * * * * * * * * * * * * * * */
  const { activateScores, activateCalendar } = props

  /* * * * * * * * * * * * * * * *
   *
   * HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleGoToScoresClick (e) {
    if (e && e.preventDefault) e.preventDefault()
    if (activateScores) activateScores()
  }

  function handleGoToCalendarClick (e) {
    if (e && e.preventDefault) e.preventDefault()
    if (activateCalendar) activateCalendar()
  }


  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-navigation'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    <button
      className={`${c}__go-to-scores`}
      onClick={handleGoToScoresClick}>
      <Paragraph small>La course</Paragraph>
    </button>
    <button
      className={`${c}__go-to-calendar`}
      onClick={handleGoToCalendarClick}>
      <Paragraph small>Le calendrier</Paragraph>
    </button>
    <button
      className={`${c}__go-back-to-scores`}
      onClick={handleGoToScoresClick}>
      <Paragraph small>Retour à la course</Paragraph>
    </button>
    <button
      className={`${c}__go-back-to-calendar`}
      onClick={handleGoToCalendarClick}>
      <Paragraph small>Retour au calendrier</Paragraph>
    </button>
  </div>
}
