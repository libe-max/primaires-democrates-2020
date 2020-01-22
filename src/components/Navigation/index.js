import React from 'react'

/*
 *   Navigation
 *   ------------------------------------------------------
 *
 *   PROPS
 *   -
 *   
 */

export default function Navigation (props) {
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
    <button>La course</button>
    <button>Le calendrier</button>
    <button>Retour à la course</button>
    <button>Retour au calendrier</button>
  </div>
}
