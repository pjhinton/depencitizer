(function () {
    $(document).ready(function () {
        /* 
         * This is a background element that
         * remains in place in the event that
         * the user employs the "hide footer"
         * functionality.
         */
        $("#theGovBG").remove();
        /*
         * This is the element that displays
         * the governor's image and a hyperlink
         * pointing to the governor's website.
         */
        $(".footer-cta-governor").hide();
    });
})();
