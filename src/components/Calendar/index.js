import React from 'react'
import moment from 'moment'
import State from '../State'

/*
 *   Calendar
 *   ------------------------------------------------------
 *
 *   PROPS
 *   states, activateState
 *   
 */

export default function Calendar (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { states, activateState } = props

  /* * * * * * * * * * * * * * * *
   *
   * LOGIC
   *
   * * * * * * * * * * * * * * * */
  const chronoSortedStates = states.sort((stateA, stateB) => {
    return moment(stateA.date, 'DD/MM/YYYY') - moment(stateB.date, 'DD/MM/YYYY')
  })

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-calendar'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>{
    chronoSortedStates.map(state => <State
      value={state}
      key={state.id}
      activateState={activateState} />)
  }</div>
}
