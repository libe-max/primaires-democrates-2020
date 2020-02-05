import React from 'react'
import BlockTitle from 'libe-components/lib/text-levels/BlockTitle'
import Paragraph from 'libe-components/lib/text-levels/Paragraph'

/*
 *   Explanations
 *   ------------------------------------------------------
 *
 *   PROPS
 *   -
 *   
 */

export default function Explanations (props) {
  /* * * * * * * * * * * * * * * *
   *
   * ASSIGN CLASSES
   *
   * * * * * * * * * * * * * * * */
  const c = 'primaires-democrates-explanations'
  const classes = [c]

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  return <div className={classes.join(' ')}>
    <BlockTitle>
      Les primaires démocrates,<br />
      c'est quoi exactement ?
    </BlockTitle>
    <Paragraph>
      De février à début juin, le Parti démocrate organise des primaires pour désigner son candidat à l'élection présidentielle américaine. 57 Etats et territoires des Etats-Unis organisent leurs propres scrutins, qui consistent à élire – à la proportionnelle – des délégués engagés auprès des différents candidats de la primaire. Etat après Etat, chaque candidat à l'investiture cumule ainsi des délégués : sachant qu'il y en a 3 979 à élire au total, le but est donc d'en obtenir 1990, c'est-à-dire la majorité absolue. Les délégués voteront formellement à la mi-juillet, lors de la Convention du Parti démocrate à Milwaukee, pour désigner l'adversaire de Donald Trump à l'élection présidentielle du 3 novembre.
    </Paragraph>
    <br /><br />
    <Paragraph>
      <a
        onClick={e => console.log(e)}
        href='https://www.liberation.fr/planete/2020/02/03/etats-unis-tout-comprendre-aux-primaires-democrates_1775574'
        target='_blank'
        noreferrer='true'
        noopener='true'>
        Je veux en savoir encore plus
      </a>
    </Paragraph>
  </div>
}
