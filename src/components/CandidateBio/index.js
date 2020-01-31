import React from 'react'
import JSXInterpreter from 'libe-components/lib/logic/JSXInterpreter'
import Paragraph from 'libe-components/lib/text-levels/Paragraph'

/*
 *   CandidateBio
 *   ------------------------------------------------------
 *
 *   PROPS
 *   candidate
 *   
 */

export default function CandidateBio (props) {
  /* * * * * * * * * * * * * * * *
   *
   * PROPS & STATE
   *
   * * * * * * * * * * * * * * * */
  const { candidate } = props

  /* * * * * * * * * * * * * * * *
   *
   * LOGIC
   *
   * * * * * * * * * * * * * * * */
  const photo = candidate ? candidate.photo : null
  const name = candidate ? candidate.name : null
  const bio = candidate ? candidate.bio : null

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-candidate-bio'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    <div className={`${c}__head`}>
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className={`${c}__photo`}>
        {photo}
      </div>
      <div className={`${c}__name`}>
        <Paragraph big>{name}</Paragraph>
      </div>
    </div>
    <div className={`${c}__bio`}>
      <div className='lblb-paragraph'>
        <JSXInterpreter content={bio} />
      </div>
    </div>
  </div>
}
