import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/fr'
import BlockTitle from 'libe-components/lib/text-levels/BlockTitle'
import Paragraph from 'libe-components/lib/text-levels/Paragraph'

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
  const [state, setState] = useState(null)

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
    <BlockTitle>
      Au {today}<br />
      il reste {100 - Math.round(advancement * 100)}% délégués à élire
    </BlockTitle>
    <Paragraph>
      <a
        href='#'
        onClick={handleClick}>
        J'ai rien compris
      </a>
    </Paragraph>
  </div>
}
