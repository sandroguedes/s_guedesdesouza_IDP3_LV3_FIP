(() => {
    console.log('FIRED');

    // SCROLL TOPNAV START
        //--------------------------------------------------------------
        // this code is adapted from what was built during the previous term FIP. I couldn't find the exact source, but I believe I got it started using a tutorial from W3Schools.
        //--------------------------------------------------------------

    console.log("scroll FIRED!")

    let topNavBar = document.querySelector(".topnav");
    let prevScroll = window.pageYOffset;
    
    window.onscroll = function() {
        let currentScroll = window.pageYOffset;
        
        if (prevScroll > currentScroll) {
            topNavBar.style.top = "0";
            topNavBar.style.transition = "0.4s";
            } else {
                topNavBar.style.top = "-90px";
                topNavBar.style.transition = "0.4s";
                }
            prevScroll = currentScroll;
    }

    // SCROLL TOPNAV END

})();
