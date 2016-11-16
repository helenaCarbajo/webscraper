/**
 * Created by helena on 14/11/16.
 */
"use strict"

var cheerio = require("cheerio");

module.exports = {
    getLinks: getLinks
}

function getLinks($) {
    var links = [];
    var uris = [];
    //console.log($);
    links = $('a[href^="http"]').each(function(index,element){
        uris.push($(element).attr("href"));
    });
    //console.log(uris);
    return uris;

}
