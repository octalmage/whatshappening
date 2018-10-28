module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-rss',
      options: {
        rssURL: 'http://www.austintexas.gov/department/events/1807/rss.xml'
      }
    },
  ]
}
