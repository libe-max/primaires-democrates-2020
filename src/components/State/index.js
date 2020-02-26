import React from 'react'
import moment from 'moment'
import BlockTitle from 'libe-components/lib/text-levels/BlockTitle'
import Paragraph from 'libe-components/lib/text-levels/Paragraph'
import Svg from 'libe-components/lib/primitives/Svg'
import { statics_url as staticsUrl } from '../../config'

/*
 *   State
 *   ------------------------------------------------------
 *
 *   PROPS
 *   value, activateState, isPassed, totalDelegates
 *   
 */

export default function State (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { value, activateState, totalDelegates } = props

  /* * * * * * * * * * * * * * * *
   *
   * INNER LOGIC
   *
   * * * * * * * * * * * * * * * */
  const momentDate = moment(value.date, 'DD/MM/YYYY')
  const displayDate = momentDate.format('D MMMM')

  /* * * * * * * * * * * * * * * *
   *
   * ACTION HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleClick (e) {
    if (activateState && value.id && value._is_passed) activateState(value.id)
  }

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-state'
  const classes = [c]
  if (value._is_passed) classes.push(`${c}_is-passed`)

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div
    onClick={handleClick}
    className={classes.join(' ')}>
    <div className={`${c}__date`}>
      <BlockTitle level={10}>
        {displayDate}
      </BlockTitle>
    </div>
    <div className={`${c}__name`}>
      <BlockTitle level={10}>
        &nbsp;-&nbsp;{value.name}
      </BlockTitle>
    </div>
    <div className={`${c}__nb-delegates`}>
      <Paragraph small>&nbsp;-&nbsp;{value.nb_delegates} délégués</Paragraph>
    </div>
    <div className={`${c}__percent-delegates`}>
      <Paragraph small>({Math.floor((value.nb_delegates / totalDelegates) * 1000) / 10}%)</Paragraph>
    </div>
    <div className={`${c}__see-detail`}>
      <button>
        <Svg src={`${staticsUrl}/assets/right-arrow-head-icon_24.svg`} />
      </button>
    </div>
  </div>
}
