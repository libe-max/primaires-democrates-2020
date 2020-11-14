const currentProtocol = typeof window !== 'undefined' ? window.location.protocol : 'http:'
const currentHostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost'

const config = {
  meta: {
    author: 'Maxime Fabas',
    title: 'Primaires démocrates : la course à l\'investiture',
    url: 'https://www.liberation.fr/apps/2020/02/primaires-democrates-2020',
    description: 'Sanders, Biden, Buttigieg ou Warren : qui défiera Donald Trump à la présidentielle américaine de novembre 2020 ? Suivez la course à l\'investiture démocrate et retrouvez les résultats Etat par Etat grâce à notre page dédiée.',
    image: 'https://www.liberation.fr/apps/2020/02/primaires-democrates-2020/social.jpg',
    xiti_id: 'primaires-democrates-2020',
    tweet: 'Some tweet text',
  },
  tracking: {
    active: false,
    format: 'libe-apps-template',
    article: 'libe-apps-template'
  },
  show_header: true,
  statics_url: process.env.NODE_ENV === 'production'
    ? 'https://www.liberation.fr/apps/static'
    : `${currentProtocol}//${currentHostname}:3003`,
  api_url: process.env.NODE_ENV === 'production'
    ? 'https://libe-labo-2.site/api'
    : `${currentProtocol}//${currentHostname}:3004/api`,
  stylesheet: 'primaires-democrates.css',
  spreadsheet: './data.tsv'
}

module.exports = config
