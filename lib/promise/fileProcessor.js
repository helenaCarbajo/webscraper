/**
 * Created by helena on 16/11/16.
 */
"use strict"

var fsp = require("fs-promise");

module.exports = {
    read: read,
    write: write
}

function read(file){
    fsp.readFile(file)
        .then(function(data){
            console.log(data);
        }).catch(function(error){
            console.log(error);
    });
}

function write(file,data){
    fsp.writeFile(file, data)
        .then(function(){
            console.log("File written");
        }).catch(function(error){
            console.log(error);
    });
}
