/* ============================================================
   VEDAM DHARMIK VIDHI KENDRA
   MAIN JAVASCRIPT
   ============================================================

   Website:
   वेदम धार्मिक विधी केंद्र

   Location:
   आंबेगाव पठार, पुणे

   Main Contact:
   7350325936

   Secondary Contact:
   7385325936

   ------------------------------------------------------------
   RESPONSIBILITIES OF THIS FILE
   ------------------------------------------------------------

   1. Website initialization
   2. Navigation
   3. Mobile menu
   4. Smooth scrolling
   5. Active navigation
   6. Sticky header
   7. Scroll animations
   8. Back-to-top button
   9. Contact buttons
   10. WhatsApp buttons
   11. Contact form
   12. Footer year
   13. Image handling
   14. Page loading
   15. Accessibility
   16. General UI interactions

   ------------------------------------------------------------
   NOTE:
   services.js handles the Puja/Services section.
   gallery.js will handle the Gallery section.
   ============================================================ */


/* ============================================================
   1. WEBSITE CONFIGURATION
   ============================================================ */

const VEDAM_CONFIG = {

    businessName: "वेदम धार्मिक विधी केंद्र",

    englishBusinessName:
        "Vedam Dharmik Vidhi Kendra",

    location:
        "आंबेगाव पठार, पुणे",

    phonePrimary:
        "7350325936",

    phoneSecondary:
        "7385325936",

    whatsapp:
        "917350325936",

    email:
        "Pratap.inamdar.3915@gmail.com",

    openingMessage:
        "नमस्कार 🙏 मला वेदम धार्मिक विधी केंद्राबद्दल माहिती हवी आहे."
};


/* ============================================================
   2. DOM READY
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🙏 Vedam Dharmik Vidhi Kendra website initialized."
        );

        initializeWebsite();

    }
);


/* ============================================================
   3. MAIN INITIALIZATION
   ============================================================ */
function initializeWebsite() {

    console.log("Initializing Vedam website...");

    initializeNavigation();

    initializeMobileMenu();

    initializeSmoothScrolling();

    initializeStickyHeader();

    initializeScrollReveal();

    initializeBackToTop();

    initializeContactButtons();

    initializeHeroButtons();

    initializeContactForm();

    initializeFooterYear();

    initializeImageHandling();

    initializeLazyImages();

    initializeAccessibility();

    initializePageLoader();

    initializeSectionObserver();

    initializeTouchBehavior();

    // Gallery integration diagnostic
    const galleryContainer =
        document.getElementById("gallery-grid") ||
        document.getElementById("gallery-container");

    if (galleryContainer) {
        console.log("Gallery container found:", galleryContainer);
    } else {
        console.warn(
            "Gallery container not found. Check the gallery HTML IDs."
        );
    }

    if (window.VedamGallery) {
        console.log("Vedam Gallery API detected.");
    } else {
        console.warn(
            "Vedam Gallery API not detected. Check gallery.js loading."
        );
    }

}

/* ============================================================
   4. NAVIGATION
   ============================================================ */

function initializeNavigation() {

    const navLinks =
        document.querySelectorAll(
            "nav a, .nav-link, .navigation a"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const href =
                    link.getAttribute("href");


                if (
                    !href ||
                    href === "#" ||
                    !href.startsWith("#")
                ) {
                    return;
                }


                const target =
                    document.querySelector(href);


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.querySelector(
                        "header, .header, .site-header"
                    );


                let headerHeight = 0;


                if (header) {

                    headerHeight =
                        header.offsetHeight;

                }


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    10;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });


                closeMobileMenu();

            }
        );

    });

}


/* ============================================================
   5. MOBILE MENU
   ============================================================ */

function initializeMobileMenu() {

    const menuButton =
        document.querySelector(
            "#menu-toggle, " +
            "#mobile-menu-toggle, " +
            ".menu-toggle, " +
            ".hamburger, " +
            ".mobile-menu-btn"
        );


    const navigation =
        document.querySelector(
            "#main-nav, " +
            "#mobile-menu, " +
            ".main-nav, " +
            ".mobile-menu, " +
            ".navigation"
        );


    if (!menuButton || !navigation) {

        console.log(
            "Mobile menu elements not found. Skipping."
        );

        return;

    }


    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                navigation.classList.toggle(
                    "active"
                );


            menuButton.classList.toggle(
                "active",
                isOpen
            );


            menuButton.setAttribute(
                "aria-expanded",
                isOpen
                    ? "true"
                    : "false"
            );


            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        }
    );


    /*
       Close menu when a navigation link
       is clicked.
    */

    const links =
        navigation.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );

    });


    /*
       Close when clicking outside.
    */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                closeMobileMenu();

            }

        }
    );


    /*
       Close using Escape key.
    */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeMobileMenu();

            }

        }
    );

}


/* ============================================================
   6. CLOSE MOBILE MENU
   ============================================================ */

function closeMobileMenu() {

    const navigation =
        document.querySelector(
            "#main-nav, " +
            "#mobile-menu, " +
            ".main-nav, " +
            ".mobile-menu, " +
            ".navigation"
        );


    const menuButton =
        document.querySelector(
            "#menu-toggle, " +
            "#mobile-menu-toggle, " +
            ".menu-toggle, " +
            ".hamburger, " +
            ".mobile-menu-btn"
        );


    if (navigation) {

        navigation.classList.remove(
            "active"
        );

    }


    if (menuButton) {

        menuButton.classList.remove(
            "active"
        );


        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    document.body.classList.remove(
        "menu-open"
    );

}


/* ============================================================
   7. SMOOTH SCROLLING
   ============================================================ */

function initializeSmoothScrolling() {

    /*
       This handles anchor links that may not
       have been caught by navigation.
    */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const href =
                    link.getAttribute("href");


                if (
                    !href ||
                    href === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(href);


                if (!target) {

                    return;

                }


                event.preventDefault();


                const header =
                    document.querySelector(
                        "header, .header, .site-header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const position =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    10;


                window.scrollTo({

                    top: position,

                    behavior: "smooth"

                });

            }
        );

    });

}


/* ============================================================
   8. STICKY HEADER
   ============================================================ */

function initializeStickyHeader() {

    const header =
        document.querySelector(
            "header, .header, .site-header"
        );


    if (!header) {

        return;

    }


    function updateHeader() {

        if (
            window.scrollY > 40
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}


/* ============================================================
   9. ACTIVE NAVIGATION LINK
   ============================================================ */

function initializeSectionObserver() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    if (!sections.length) {

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const sectionId =
                            entry.target.id;


                        const navLinks =
                            document.querySelectorAll(
                                'a[href^="#"]'
                            );


                        navLinks.forEach(
                            function (link) {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${sectionId}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }
                );

            },
            {
                threshold: 0.25,

                rootMargin:
                    "-80px 0px -40% 0px"
            }
        );


    sections.forEach(
        function (section) {

            observer.observe(section);

        }
    );

}


/* ============================================================
   10. SCROLL REVEAL ANIMATIONS
   ============================================================ */

function initializeScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal, " +
            ".scroll-reveal, " +
            ".fade-in, " +
            ".animate-on-scroll"
        );


    if (!elements.length) {

        return;

    }


    /*
       If browser doesn't support
       IntersectionObserver,
       show everything.
    */

    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        function (element) {

            observer.observe(element);

        }
    );

}


/* ============================================================
   11. BACK TO TOP BUTTON
   ============================================================ */

function initializeBackToTop() {

    let button =
        document.querySelector(
            "#back-to-top, " +
            ".back-to-top, " +
            ".scroll-top"
        );


    /*
       If there is no button in HTML,
       create one automatically.
    */

    if (!button) {

        button =
            document.createElement("button");

        button.id =
            "back-to-top";

        button.className =
            "back-to-top";

        button.setAttribute(
            "type",
            "button"
        );

        button.setAttribute(
            "aria-label",
            "Back to top"
        );

        button.innerHTML =
            "↑";

        document.body.appendChild(button);

    }


    button.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    function updateBackToTop() {

        if (
            window.scrollY > 500
        ) {

            button.classList.add(
                "visible"
            );

        } else {

            button.classList.remove(
                "visible"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackToTop,
        {
            passive: true
        }
    );


    updateBackToTop();

}


/* ============================================================
   12. CONTACT BUTTONS
   ============================================================ */

function initializeContactButtons() {

    /*
       WhatsApp
    */

    const whatsappButtons =
        document.querySelectorAll(
            '[data-contact="whatsapp"], ' +
            ".whatsapp-btn, " +
            ".whatsapp-button"
        );


    whatsappButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    openVedamWhatsApp();

                }
            );

        }
    );


    /*
       Primary phone
    */

    const phoneButtons =
        document.querySelectorAll(
            '[data-contact="phone"], ' +
            ".phone-btn, " +
            ".call-btn"
        );


    phoneButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    callVedamGuruji();

                }
            );

        }
    );


    /*
       Secondary phone
    */

    const secondaryButtons =
        document.querySelectorAll(
            '[data-contact="phone-secondary"]'
        );


    secondaryButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    window.location.href =
                        `tel:${VEDAM_CONFIG.phoneSecondary}`;

                }
            );

        }
    );

}


/* ============================================================
   13. OPEN WHATSAPP
   ============================================================ */

function openVedamWhatsApp(
    customMessage = ""
) {

    const message =
        customMessage ||
        VEDAM_CONFIG.openingMessage;


    const encodedMessage =
        encodeURIComponent(message);


    const url =
        `https://wa.me/${VEDAM_CONFIG.whatsapp}?text=${encodedMessage}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ============================================================
   14. CALL GURUJI
   ============================================================ */

function callVedamGuruji(
    number = VEDAM_CONFIG.phonePrimary
) {

    window.location.href =
        `tel:${number}`;

}


/* ============================================================
   15. HERO BUTTONS
   ============================================================ */

function initializeHeroButtons() {

    /*
       Find buttons that contain
       common hero CTA classes.
    */

    const whatsappHeroButtons =
        document.querySelectorAll(
            ".hero-whatsapp, " +
            ".hero .whatsapp-btn, " +
            ".hero .whatsapp-button"
        );


    whatsappHeroButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    openVedamWhatsApp();

                }
            );

        }
    );


    const contactHeroButtons =
        document.querySelectorAll(
            ".hero-contact, " +
            ".hero .call-btn"
        );


    contactHeroButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    callVedamGuruji();

                }
            );

        }
    );

}


/* ============================================================
   16. CONTACT FORM
   ============================================================ */

function initializeContactForm() {

    const form =
        document.querySelector(
            "#contact-form, " +
            ".contact-form"
        );


    if (!form) {

        console.log(
            "Contact form not found."
        );

        return;

    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nameInput =
                form.querySelector(
                    '[name="name"], #name'
                );


            const phoneInput =
                form.querySelector(
                    '[name="phone"], #phone'
                );


            const messageInput =
                form.querySelector(
                    '[name="message"], #message'
                );


            const serviceInput =
                form.querySelector(
                    '[name="service"], #service'
                );


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";


            const phone =
                phoneInput
                    ? phoneInput.value.trim()
                    : "";


            const message =
                messageInput
                    ? messageInput.value.trim()
                    : "";


            const service =
                serviceInput
                    ? serviceInput.value.trim()
                    : "";


            /*
               Basic validation
            */

            if (!name) {

                showFormMessage(
                    form,
                    "कृपया आपले नाव लिहा.",
                    "error"
                );

                if (nameInput) {

                    nameInput.focus();

                }

                return;

            }


            if (!phone) {

                showFormMessage(
                    form,
                    "कृपया आपला मोबाईल नंबर लिहा.",
                    "error"
                );

                if (phoneInput) {

                    phoneInput.focus();

                }

                return;

            }


            /*
               Indian mobile number validation.
            */

            const cleanPhone =
                phone.replace(
                    /\D/g,
                    ""
                );


            if (
                cleanPhone.length !== 10
            ) {

                showFormMessage(
                    form,
                    "कृपया योग्य 10 अंकी मोबाईल नंबर लिहा.",
                    "error"
                );

                if (phoneInput) {

                    phoneInput.focus();

                }

                return;

            }


            /*
               Build WhatsApp message.
            */

            let whatsappMessage =
                `नमस्कार 🙏%0A%0A`;


            whatsappMessage +=
                `नाव: ${encodeURIComponent(name)}%0A`;


            whatsappMessage +=
                `मोबाईल: ${encodeURIComponent(phone)}%0A`;


            if (service) {

                whatsappMessage +=
                    `विधी: ${encodeURIComponent(service)}%0A`;

            }


            if (message) {

                whatsappMessage +=
                    `संदेश: ${encodeURIComponent(message)}%0A`;

            }


            whatsappMessage +=
                `%0Aवेदम धार्मिक विधी केंद्राबद्दल चौकशी.`;


            const whatsappURL =
                `https://wa.me/${VEDAM_CONFIG.whatsapp}?text=${whatsappMessage}`;


            showFormMessage(
                form,
                "WhatsApp उघडत आहे...",
                "success"
            );


            setTimeout(
                function () {

                    window.open(
                        whatsappURL,
                        "_blank",
                        "noopener,noreferrer"
                    );

                },
                500
            );

        }
    );

}


/* ============================================================
   17. FORM MESSAGE
   ============================================================ */

function showFormMessage(
    form,
    message,
    type = "success"
) {

    let messageElement =
        form.querySelector(
            ".form-message"
        );


    if (!messageElement) {

        messageElement =
            document.createElement("div");

        messageElement.className =
            "form-message";

        form.appendChild(
            messageElement
        );

    }


    messageElement.textContent =
        message;


    messageElement.classList.remove(
        "success",
        "error"
    );


    messageElement.classList.add(
        type
    );


    messageElement.style.display =
        "block";


    /*
       Automatically hide after
       a few seconds.
    */

    setTimeout(
        function () {

            messageElement.style.display =
                "none";

        },
        5000
    );

}


/* ============================================================
   18. FOOTER YEAR
   ============================================================ */

function initializeFooterYear() {

    const yearElements =
        document.querySelectorAll(
            "#current-year, " +
            ".current-year, " +
            "[data-current-year]"
        );


    const currentYear =
        new Date().getFullYear();


    yearElements.forEach(
        function (element) {

            element.textContent =
                currentYear;

        }
    );

}


/* ============================================================
   19. IMAGE ERROR HANDLING
   ============================================================ */

function initializeImageHandling() {

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(
        function (image) {

            image.addEventListener(
                "error",
                function () {

                    console.warn(
                        "Image could not be loaded:",
                        image.src
                    );


                    image.classList.add(
                        "image-error"
                    );


                    /*
                       Don't repeatedly trigger
                       the error handler.
                    */

                    image.onerror = null;

                }
            );

        }
    );

}


/* ============================================================
   20. LAZY IMAGE LOADING
   ============================================================ */

function initializeLazyImages() {

    const images =
        document.querySelectorAll(
            "img[data-src]"
        );


    if (!images.length) {

        return;

    }


    if (
        !("IntersectionObserver" in window)
    ) {

        images.forEach(
            function (image) {

                image.src =
                    image.dataset.src;

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const image =
                            entry.target;


                        image.src =
                            image.dataset.src;


                        image.removeAttribute(
                            "data-src"
                        );


                        observer.unobserve(
                            image
                        );

                    }
                );

            },
            {
                rootMargin:
                    "200px"
            }
        );


    images.forEach(
        function (image) {

            observer.observe(image);

        }
    );

}


/* ============================================================
   21. ACCESSIBILITY
   ============================================================ */

function initializeAccessibility() {

    /*
       Add keyboard focus behavior
       to clickable cards.
    */

    const clickableCards =
        document.querySelectorAll(
            ".service-card, " +
            ".gallery-card, " +
            ".guruji-card"
        );


    clickableCards.forEach(
        function (card) {

            /*
               Don't force tabindex if
               the card already has one.
            */

            if (
                !card.hasAttribute(
                    "tabindex"
                )
            ) {

                card.setAttribute(
                    "tabindex",
                    "0"
                );

            }

        }
    );


    /*
       Allow Enter / Space on
       elements that have role=button.
    */

    const roleButtons =
        document.querySelectorAll(
            '[role="button"]'
        );


    roleButtons.forEach(
        function (element) {

            element.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        element.click();

                    }

                }
            );

        }
    );

}


/* ============================================================
   22. PAGE LOADER
   ============================================================ */

function initializePageLoader() {

    /*
       If index.html contains a loader,
       hide it when page is loaded.
    */

    const loader =
        document.querySelector(
            "#page-loader, " +
            ".page-loader, " +
            ".loading-screen"
        );


    if (!loader) {

        return;

    }


    window.addEventListener(
        "load",
        function () {

            loader.classList.add(
                "loaded"
            );


            setTimeout(
                function () {

                    loader.style.display =
                        "none";

                },
                600
            );

        }
    );

}


/* ============================================================
   23. PREVENT DOUBLE TAP / UNWANTED ZOOM
   ============================================================ */

function initializeTouchBehavior() {

    /*
       This intentionally does NOT disable
       browser zoom.

       Accessibility-friendly behavior:
       users should still be able to zoom.
    */

    document.documentElement.classList.add(
        "touch-ready"
    );

}


/* ============================================================
   24. WINDOW RESIZE HANDLER
   ============================================================ */

let resizeTimer = null;


window.addEventListener(
    "resize",
    function () {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                function () {

                    /*
                       Close mobile menu if
                       screen becomes desktop size.
                    */

                    if (
                        window.innerWidth > 900
                    ) {

                        closeMobileMenu();

                    }

                },
                150
            );

    }
);


/* ============================================================
   25. ONLINE / OFFLINE STATUS
   ============================================================ */

window.addEventListener(
    "offline",
    function () {

        console.warn(
            "Internet connection lost."
        );

    }
);


window.addEventListener(
    "online",
    function () {

        console.log(
            "Internet connection restored."
        );

    }
);


/* ============================================================
   26. GLOBAL VEDAM WEBSITE API
   ============================================================ */

window.VedamWebsite = {

    config:
        VEDAM_CONFIG,

    whatsapp:
        openVedamWhatsApp,

    call:
        callVedamGuruji,

    closeMenu:
        closeMobileMenu

};


/* ============================================================
   27. CONSOLE BRANDING
   ============================================================ */

console.log(
    "%c🙏 VEDAM DHARMIK VIDHI KENDRA",
    "font-size: 18px; font-weight: bold;"
);


console.log(
    "%cधार्मिक विधी | संस्कार | मार्गदर्शन",
    "font-size: 13px;"
);


/* ============================================================
   END OF MAIN.JS
   ============================================================ */