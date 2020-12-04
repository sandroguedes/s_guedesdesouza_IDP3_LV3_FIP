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

    // ---------------------------------------------
    // ---------------------------------------------

    // HAMBURGER START

    // console.log("hamburger FIRED!");

    // let button = document.querySelector(".hamburgerbtn")
    //     burgerNav = document.querySelector(".hamburgersidenav")
    //     burgerCon = document.querySelector(".hiddenmobnav")
    //     mainContent = document.querySelector(".contentbox");

    // function hamburgerMenu() {
    //     burgerCon.classList.toggle("hiddenmobnavtoggled")
    //     mainContent.classList.toggle("contentboxtoggled")
    //     burgerNav.classList.toggle("hamburgersidenavtoggled")
    //     button.classList.toggle("hamburgerbtnasctive");
    // }

    // button.addEventListener("click", hamburgerMenu);

    // HAMBURGER END

    // ---------------------------------------------
    // ---------------------------------------------

    // SLIDE SHOW START
        //--------------------------------------------------------------
        // this code is adapted from what was built during the previous term FIP, which was in turn adapted from the Slideshow Tutorial from W3Schools at "https://www.w3schools.com/howto/howto_js_slideshow.asp".
        //--------------------------------------------------------------

    // console.log('slide show FIRED!');

    // let slideIndex = 1;
    // showSlides(slideIndex);

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    //     }

    // function showSlides(n) {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     if (n > slides.length) {slideIndex = 1}
    //     if (n < 1) {slideIndex = slides.length}
    //     for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
        
    //     slides[slideIndex-1].style.display = "block";
    //     }

    // SLIDE SHOW END

})();