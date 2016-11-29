/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here

  //var divs = document.getElementsByClassName("box");
  console.log("ready!");
  var menu_wrapper = document.getElementById("menu_wrapper");
  $(menu_wrapper).hide();

  function expand_menu() {
      //var box1 = document.getElementById("box_one");
      //var box2 = document.getElementById("menu_box");
      var row1 = document.getElementById("row_one");
      var row2 = document.getElementById("row_two");
      //var box_3 = document.getElementById("box_three");
      //$(box1).toggle("slow");
      //$(box2).toggle("slow");
      $(row2).toggle("slow");
      $(row1).toggle("slow");
      //$(box_3).toggle("slow");
      $("#wrapper").css("background-color", "#48FFBB");
      $(menu_wrapper).show();
  };
  var menu_card = document.getElementById("menu_box");
  menu_card.addEventListener("click", expand_menu);

  const current_date = new Date();
  const day_of_week = current_date.getDay();
  const current_hour = current_date.getHours();
  var hours_div = document.getElementById("open_closed");
  console.log("Current Hour: " + current_hour);
  //Write 'open now' as long as it's after 7 am, before 3pm, and not tuesday
  if (current_hour >= 7 && current_hour < 15 && day_of_week !== 2) {
      hours_div.textContent = 'Open now';
  }
  //write 'closed' if the day of the week is tuesday
  else {
      hours_div.textContent = 'Closed now';
  }

  /*script for hover styles */

  /*log the ID of the div over which the mouse is hovered*/
/*
    $(.box).mouseover(function(){
      $(this.id).css('backgroundColor', 'red')
    }).mouseout(function(){
      $(this.id).css('backgroundColor', 'blue')
    })
    function errorHandler(error) {
      console.log(error.toString())
      this.emit('end')
    }
    */
    /*
    let boxMouseHoverEvent = function(){
        let boxes = document.getElementsByClassName("box");
        boxes.onmouseover = logDivId;
        console.log('the mouse went over a div.' + this.id +' , is the id of that div.');
    };
    */
    /*
    function logDivId() {
      console.log("ID:" + this.id);
    };
    */



    console.log("all scripts loaded");
})();

let changeBackgroundColor = function() {
  /*console.log($(this).css('backgroundColor'));*/
  $(document.getElementById("box_one")).css('backgroundColor', 'red');
};
let resetBackgroundColor = function() {
  $(document.getElementById("box_one")).css('backgroundColor', 'black');
};

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes.onmouseover = changeBackgroundColor;
