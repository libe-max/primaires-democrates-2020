const currentProtocol = typeof window !== 'undefined' ? window.location.protocol : 'http:'
const currentHostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost'

const config = {
  meta: {
    author: 'Maxime Fabas',
    title: 'Primaires démocrates 2020',
    url: 'https://www.liberation.fr/apps/2020/02/primaires-democrates-2020',
    description: '',
    image: '',
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
  spreadsheet: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT99eXOlXkLDOGU7ucGzQ0G9zZEsQkNuDdp8iMy58gkW9TEnMpjn9cnNmpgnPgz6PU0HdVbjciIbkAp/pub?gid=1987543395&single=true&output=tsv'
}

module.exports = config
