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
        theme_color: '#bf5700',
        display: 'standalone',
        icon: 'static/icon-precomposed.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-57460911-1',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|\/static\/)/,
            handler: `cacheFirst`,
            options: {
              backgroundSync: {
                name: 'static',
                options: {
                  maxRetentionTime: 60 * 60,
                },
              },
            }
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
            options: {
              backgroundSync: {
                name: 'images',
                options: {
                  maxRetentionTime: 60 * 60,
                },
              },
            }
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
            options: {
              backgroundSync: {
                name: 'fonts',
                options: {
                  maxRetentionTime: 60 * 60,
                },
              },
            }
          },
        ],
      },
    }
  ]
}
