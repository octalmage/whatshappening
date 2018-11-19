module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-rss',
      options: {
        rssURL: 'http://www.austintexas.gov/department/events/1807/rss.xml'
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.js'),
      },
    },
    '@wapps/gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "What's Happening",
        short_name: "What's Happening",
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/web_hi_res_512.png',
      },
    },
    'gatsby-plugin-offline',
  ]
}
