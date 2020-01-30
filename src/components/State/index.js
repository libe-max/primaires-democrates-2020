import React from 'react'
import moment from 'moment'
import BlockTitle from 'libe-components/lib/text-levels/BlockTitle'
import Svg from 'libe-components/lib/primitives/Svg'
import { statics_url as staticsUrl } from '../../config'

/*
 *   State
 *   ------------------------------------------------------
 *
 *   PROPS
 *   value, activateState
 *   
 */

export default function State (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { value, activateState } = props

  /* * * * * * * * * * * * * * * *
   *
   * INNER LOGIC
   *
   * * * * * * * * * * * * * * * */
  const now = moment('22/04/2020', 'DD/MM/YYYY')
  const momentDate = moment(value.date, 'DD/MM/YYYY')
  const displayDate = momentDate.format('DD MMMM')
  const isPassed = now > momentDate

  /* * * * * * * * * * * * * * * *
   *
   * ACTION HANDLERS
   *
   * * * * * * * * * * * * * * * */
  function handleClick (e) {
    if (activateState && value.id) activateState(value.id)
  }

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-state'
  const classes = [c]
  if (isPassed) classes.push(`${c}_is-passed`)

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
        {displayDate}&nbsp;-&nbsp;
      </BlockTitle>
    </div>
    <div className={`${c}__name`}>
      <BlockTitle level={10}>
        {value.name}
      </BlockTitle>
    </div>
    <div className={`${c}__see-detail`}>
      <button>
        <Svg src={`${staticsUrl}/assets/right-arrow-head-icon_24.svg`} />
      </button>
    </div>
  </div>
}
