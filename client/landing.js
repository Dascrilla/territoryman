Template.landing.rendered = function() {
    //remove nav
    //add / remove class
    $("#main").removeClass('container');
    //$("body").addClass('no-overflow');

    //this does something
    (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/platform.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    })();

}