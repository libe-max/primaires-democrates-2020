import React, { useState, useEffect } from 'react'
import PageTitle from 'libe-components/lib/text-levels/PageTitle'

/*
 *   StickyHeader
 *   ------------------------------------------------------
 *
 *   PROPS
 *   -
 *   
 */

export default function StickyHeader (props) {
  /* * * * * * * * * * * * * * * *
   *
   * STATE & PROPS
   *
   * * * * * * * * * * * * * * * */
  const [offsetTop, setOffsetTop] = useState(window.LBLB_GLOBAL.nav_height)
  const [pageIsScrolled, setPageIsScrolled] = useState(false)

  /* * * * * * * * * * * * * * * *
   *
   * METHODS
   *
   * * * * * * * * * * * * * * * */
  function fireSetOffsetTop () {
    setOffsetTop(window.LBLB_GLOBAL.nav_height)
  }

  function checkPageScrollLevel () {
    const $header = document.querySelector('.primaires-democrates-header')
    if (!$header) return
    const headerHeight = $header.clientHeight
    const pageScroll = window.scrollY
    const newPageIsScrolled = pageScroll >= headerHeight
    setPageIsScrolled(newPageIsScrolled)
  }

  /* * * * * * * * * * * * * * * *
   *
   * EFFECTS
   *
   * * * * * * * * * * * * * * * */
  useEffect(() => {
    window.setInterval(fireSetOffsetTop, 500)
    window.addEventListener('scroll', checkPageScrollLevel)
    return () => {
      window.clearInterval(fireSetOffsetTop)
      window.removeEventListener('scroll', checkPageScrollLevel)
    }
  }, [])

  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-sticky-header'
  const classes = [c]
  if (pageIsScrolled) classes.push(`${c}_visible`)

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div
    style={{ top: offsetTop }}
    className={classes.join(' ')}>
    <PageTitle level={6}>
      <span>Primaires démocrates</span>
      <span>La course à l'investiture</span>
    </PageTitle>
  </div>
}
