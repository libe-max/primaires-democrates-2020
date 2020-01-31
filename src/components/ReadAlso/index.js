import React from 'react'
import InterTitle from 'libe-components/lib/text-levels/InterTitle'
import BlockTitle from 'libe-components/lib/text-levels/BlockTitle'

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
    <InterTitle level={2}>À lire aussi</InterTitle>
    <div className={`${c}__links`}>{
      (links || []).map(link => (
        <a
          key={link.title}
          href={link.url}
          target='_blank'
          className={`${c}__link`}>
          <span className={`${c}__link-slug`}>
            <BlockTitle level={10}>{link.slug} - </BlockTitle>
          </span>
          <span className={`${c}__link-title`}>
            <BlockTitle level={10}>{link.title}</BlockTitle>
          </span>
        </a>
      ))
    }</div>
  </div>
}
