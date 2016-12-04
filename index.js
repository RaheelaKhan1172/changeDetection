"use strict";

var Horseman = require('node-horseman');
var phantomJS = new Horseman({
  phantomPath: '/Users/raheelakhan/bin/phantomjs',
  loadImages:true,
  injectJquery:true,
  webSecurity:true,
  ignoreSSQLErrors:true
});

var appData = {
  targetIds: [1100,1000,900,906,1005,1006,1007,908,907,905,901,804,806,808,803,805,706,708,1008,1107,1105,1106,1108,1110]
};

phantomJS
  .open(process.argv[2])
  .wait(10000) // let the test page load
  .status()
  .then(function(statusCode,err) {
    console.log("HTTP status code: ", statusCode);
    if (Number(statusCode) >= 400) {
      throw "Page load failed with status: " + statusCode + err;
    }
  })
  .evaluate(function() {
    $ = window.$ || window.jQuery;
    
    var html = [],id;
    if ($) {
      var divToTarget = $(".listTableBody > .table > tbody")[0].children;
      $(divToTarget).each(function(ind,elem) {
        id = $(elem)[0].children[2].children[0].innerText;
        html.push(id);
      });
    } else {
      // use vanilla j.s to get elements
    }
   return html; 
  }).then(function(result) {
    //send out e-mail if missing
    for (var i = 0; i < appData.targetIds.length;i++) {
      if (!result.indexOf(targetIds[i]) {
         
      }
    }
  }).catch(function(err) {
    console.log("something isn't right here", err);
  })
  .close();
