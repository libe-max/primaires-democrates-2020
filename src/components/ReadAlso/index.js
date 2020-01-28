import React from 'react'

/*
 *   ReadAlso
 *   ------------------------------------------------------
 *
 *   PROPS
 *   links
 *   
 */

export default function ReadAlso (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { links } = props

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-read-also'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    <div>À lire aussi</div>
    <div>
      {(links || []).map(link => <div key={link.title}>
        <a href={link.url} target='_blank'>
          {link.title}
        </a>
      </div>)}
    </div>
  </div>
}
