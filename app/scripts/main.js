// Your custom JavaScript goes here
(function() {
    'use strict';
    console.log("ready!");

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
    let box1 = document.getElementById("box_one");


    $(box1).on("mouseenter",
        function(event) {
            event.preventDefault();
            let box1 = document.getElementById("box_one");
            console.log("The mouse entered box one.");
            let box1_bg_style = window.getComputedStyle(box1, null)
                .getPropertyValue("background");
            console.log(box1_bg_style);
        });

    let box_icons = document.getElementsByClassName("fa");
    //console.log(box_icons);
    Array.from(box_icons).forEach(function(icon) {

        console.log(icon.id);
    });

    let captions = document.getElementsByClassName("caption_wrapper");

    $(captions).hover(function() {
            //function for event when hover starts
            //capture the icon which is located in the div which triggered the hover event
            let target_icon = $(this).parent().find(".fa");
            $(target_icon).stop().animate({
                marginTop: '-11px',
                opacity: .85
            }, {
                duration: 200
            });
        },
        //function for event when hover ends
        function() {
            let target_icon = $(this).parent().find(".fa");
            $(target_icon).stop().animate({
                marginTop: '0px',
                opacity: 1
            }, {
                duration: 80
            });
        }
    );

    console.log("all scripts loaded");
})();
