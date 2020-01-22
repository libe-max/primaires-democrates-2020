import React from 'react'
import moment from 'moment'

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

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div
    onClick={handleClick}
    className={classes.join(' ')}>
    <span>{moment(value.date, 'DD/MM/YYYY').format('DD MMMM')}</span>
    <span>{value.name}</span>
  </div>
}
