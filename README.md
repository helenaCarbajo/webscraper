
##Promising Web Scraper
In this exercise you are going to create a web scraper, i.e. a program that to some extends acts as a web browser.

The program will request pages from web servers, extract the links and write the web sources to a file in JSON format. 
The pages to request is to be passed as command line arguments. It’s only absolute web sources that are interesting, relative web sources can be ignored. The file must not contain any duplicated values and the values must be sorted in ascending order.

To avoid “callback hell” you are obliged to use promises instead of callback functions. You may need to “promisify” one or another API function to avoid callbacks.

ECMAScript 2015 has a number of new features that can be useful; especially Set is handy to collect unique values. For the JSON data to be easy to read make sure it’s “prettified” before writing it to the file.

Example of command line to run the application.

```shell
$ node app.js https://nodejs.org/en/ https://developer.mozilla.org/en-US/
```

The content of the file after the command. Web sources retrieved from: https://nodejs.org/en/ and https://developer.mozilla.org/en-US/. [10 January 2016]

```shell
[  
    "http://collabprojects.linuxfoundation.org",  
    "http://hacks.mozilla.org",  
    "http://stackoverflow.com/",  
    "http://www.linuxfoundation.org/programs/legal/trademark",  
    "https://bugzilla.mozilla.org/form.doc",  
    "https://bugzilla.mozilla.org/form.mdn",  
    "https://developers.google.com/v8/", 
    "https://github.com/mozilla/kuma#readme", 
    "https://github.com/nodejs/help/issues", 
    "https://github.com/nodejs/node/blob/v4.2.4/CHANGELOG.md", 
    "https://github.com/nodejs/node/blob/v5.4.0/CHANGELOG.md", 
    "https://github.com/nodejs/node/issues", 
    "https://github.com/nodejs/nodejs.org/issues", 
    "https://hacks.mozilla.org/2015/12/beyond-offline/", 
    "https://hacks.mozilla.org/2015/12/compiling-to-webassembly-its-happening/", 
    "https://hacks.mozilla.org/2015/12/developer-edition-45-animations-memory-tools-and-more/", 
    "https://hacks.mozilla.org/2015/12/trainspotting-firefox-in-2015/", 
    "https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/", 
    "https://nodejs.org/dist/latest-v4.x/docs/api/", 
    "https://nodejs.org/dist/latest-v5.x/docs/api/", 
    "https://nodejs.org/dist/v4.2.4/", 
    "https://nodejs.org/dist/v5.4.0/", 
    "https://nodejs.org/en/download/", 
    "https://nodejs.org/en/download/stable/", 
    "https://qsurvey.mozilla.com/s3/da2a7841fe76", 
    "https://raw.githubusercontent.com/nodejs/node/master/LICENSE", 
    "https://support.mozilla.org/", 
    "https://www.mozilla.org/firefox/developer/?utm_source=developer.mozilla.org&utm_medium=referral&utm_campaign=mdn-front-pg-promo",     "https://www.npmjs.com/" 
]
```
=======
# node-mongodb-vagrant
This is a boilerplate vagrant solution for students taking the course sevrer based web programming at the Linnaeus University, Kalmar, Sweden

Following stuff will be installed:
* node.js, latest stable (OBS not LTS) version
* npm (along with node.js)
* mongodb - noSQL database, latest version
* redis server - fast in memory server, version 3.0.6

To get this to work, you must have VirtualBox and Vagrant installed. Installers for VirtualBox are available at http://www.virtualbox.org, and installers for
Vagrant are available at http://www.vagrantup.com.

Clone this repo to a folder on your local system and give it a name of your own (my_project in this case)

    git clone https://github.com/1dv023/node-mongodb-vagrant.git my_project

go to that directory and start up the vagrant machine

    cd my_project
    vagrant up

The Vagrantfile will download and install the hashicorp/precise32 vagrant box if you don't
already have it.

After a few minutes, you should have a virtual dev environment with node, npm, mongodb and redis.
The port 8000 on the VM is forwarded to port 8000 on the localhost.

You can test out your environment by ssh'ing into your environment and running the sample script:

    vagrant ssh
    node app.js

## Important note about Installing NPM Packages

There are problems installing npm packages in a vagrant machine running Virtual Box on Windows. This goes for certain packages as "jade" and "express" which are trying to create symlinks during installation

This can cause problems when you're attempting to install certain packages via npm. For
example, the 'jade' and 'express' packages create symlinks during installation.

The best workaround for this is to install node packages in your shared folder with the
--no-bin-links flag, e.g.

    npm install express --no-bin-links

You can also try to install the package as globals if you need to execture the bin-file

    npm install jade -g

This vagrant images is tested on Mac OSX Yosemite with Virtual Box version 5.0.10 and Vagrant version 1.7.4
