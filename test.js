const request = require('request');
const cheerio = require('cheerio');

request('http://www.downtownaustin.com/experience/street-closures', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('.view-street-closures').children().each((i, element) => {
      // console.log($(element).html())
      const date = $(element).find('.bigdate').text();
      const closeRule = $(element).find('.close_rrule').text();
      const title = $(element).find('.closure_title').text();
      const mainDate = $(element).find('.closure_main_date').text();
      const closures = $(element).find('.steetclosure_street').text().replace(/^\s+/gm, "");
      const link = $(element).find('a').attr('href');
      console.log(title);
      console.log(link);
    });
    // $('.streetclosures').each((i, element) => {
    //   const date = $(element).children('.date-display-single');
    //   const event = $(element).children('a');
    //   const link = `http://www.austintexas.gov${event.attr('href')}`;
    //   console.log(link);
    // });
  }
});
