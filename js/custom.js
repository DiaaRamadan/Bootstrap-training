/*global $*/
$(document).ready(function () {
    'use strict';
    
    $(".carousel").carousel({
        interval: 5000
        
    });
    
    $(" .navbar-nav li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
   
});

