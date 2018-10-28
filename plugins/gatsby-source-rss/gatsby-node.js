const crypto = require('crypto');
const request = require('request');
const cheerio = require('cheerio');
const util = require('util');

async function sourceNodes({ actions, reporter, createNodeId }, { rssURL }) {
  const { createNode } = actions;
  reporter.info(rssURL);
  return new Promise((resolve, reject) => {
    request('http://www.downtownaustin.com/experience/street-closures', (error, response, html) => {
      if (error && response.statusCode !== 200) {
        reporter.error('Error fetching data from events API', error);
        return reject(error);
      }

      const $ = cheerio.load(html);
      $('.view-street-closures').children().each((i, element) => {
        const date = $(element).find('.bigdate').text();

        if (!date) return;

        const closeRule = $(element).find('.close_rrule').text();
        const title = $(element).find('.closure_title').text();
        const mainDate = $(element).find('.closure_main_date').text();
        const closures = $(element).find('.steetclosure_street').text().replace(/^\s+/gm, "");
        const link = $(element).find('a').attr('href');
        const id = createNodeId(`gatsby-source-rss-${link}${date}`);

        createNode({
          date,
          title,
          closeRule,
          mainDate,
          closures,
          link,
          id,
          parent: null,
          children: [],
          internal: {
            type: 'RssItem',
            content: JSON.stringify($(element).text()),
            contentDigest: crypto
            .createHash('md5')
            .update(JSON.stringify($(element).text()))
            .digest('hex'),
          },
        });

        return resolve();
      });
    });
  });
}

exports.sourceNodes = sourceNodes;
