/**
 * Created by helena on 14/11/16.
 */
"use strict"

var co = require("co");
var httpRequester = require("./lib/promise/httpRequester");
var htmlProcessor = require("./lib/htmlProcessor");

var url = process.argv[2];

console.log(url);

co(function* () {
    httpRequester.requestHttp(url);
    //console.log(html);
    //htmlProcessor.getLinks(html);
    return;
}).then(function () {
    console.log("Done");
}).catch(function (error) {
    console.log(error);
});
