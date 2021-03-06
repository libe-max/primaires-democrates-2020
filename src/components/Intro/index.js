import React from 'react'
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
    <BlockTitle level={10}>
      <span>Au {today}</span>
      <span>il reste {100 - Math.round(advancement * 100)}% des délégués à élire</span>
    </BlockTitle>
    <Paragraph>
      <a
        href='#'
        onClick={handleClick}>
        Comment ça marche ?
      </a>
    </Paragraph>
  </div>
}
