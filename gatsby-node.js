const path = require('path');
const slash = require('slash');
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
    {
        allRssItem {
          edges {
            node {
              id
            }
          }
        }
      }
    `)
      .then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        // Create Page pages.
        const eventTemplate = path.resolve('./src/templates/event.js');
        _.each(result.data.allRssItem.edges, (edge) => {
          createPage({
            path: `/event/${edge.node.id}`,
            component: slash(eventTemplate),
            context: {
              id: edge.node.id,
            },
          });
        });
        resolve();
      })
  });
};