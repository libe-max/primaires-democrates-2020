import React from 'react'
import moment from 'moment'
import 'moment/locale/fr'

/*
 *   Intro
 *   ------------------------------------------------------
 *
 *   PROPS
 *   advancement, showExplanations
 *   
 */

export default function Intro (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { advancement, showExplanations } = props

  /* * * * * * * * * * * * * * * *
   *
   * ACTION HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleClick (e) {
    if (e && e.preventDefault) e.preventDefault()
    if (showExplanations) showExplanations()
  }

  /* * * * * * * * * * * * * * * *
   *
   * LOGIC
   *
   * * * * * * * * * * * * * * * */
  const today = moment().format('DD MMMM YYYY')

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-intro'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    <div>
      Au {today}<br />
      il reste {100 - Math.round(advancement * 100)}% délégués à élire
    </div>
    <div>
      <a
        href='#'
        onClick={handleClick}>
        J'ai rien compris
      </a>
    </div>
  </div>
}
