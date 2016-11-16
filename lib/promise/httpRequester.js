/**
 * Created by helena on 14/11/16.
 */

var request = require("request-promise");
var cheerio = require("cheerio");
var htmlProcessor = require("./../htmlProcessor");
var fileProcessor = require("./fileProcessor");

module.exports = {
    requestHttp: requestHttp
}


function requestHttp(path) {

    var options = {
        uri: path,
        transform: function(html){
            return cheerio.load(html);
        }
    };
    var uris = [];

    request(options)
        .then(function($) {
            uris = htmlProcessor.getLinks($);
            return fileProcessor.write('uris.txt', uris);
        }).then(function(){
            return fileProcessor.read('uris.txt');
        }).catch(function (error) {
            console.log(error);
    });

}


