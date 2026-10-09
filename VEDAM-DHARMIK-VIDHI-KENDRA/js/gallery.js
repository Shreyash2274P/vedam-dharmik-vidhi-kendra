/* ============================================================
   VEDAM DHARMIK VIDHI KENDRA
   COMPLETE GALLERY JAVASCRIPT
   ============================================================

   FEATURES:
   - All real gallery photos
   - Folder-based photo organization
   - Automatic gallery card generation
   - Automatic category filters
   - Search support
   - Category filtering
   - Existing HTML lightbox support
   - Previous / Next
   - Image counter
   - Keyboard navigation
   - Mobile swipe
   - WhatsApp enquiry
   - Lazy loading
   - Responsive gallery
   - Easy addition of future photos

   ============================================================ */


/* ============================================================
   1. GALLERY CONFIGURATION
   ============================================================ */

const VEDAM_GALLERY_CONFIG = {

    whatsapp: "917350325936",

    businessName: "वेदम धार्मिक विधी केंद्र",

    defaultCategory: "all",

    animationDelay: 60

};


/* ============================================================
   2. CATEGORY CONFIGURATION
   ============================================================ */

const VEDAM_GALLERY_CATEGORIES = {

    all: {
        name: "सर्व फोटो",
        icon: "📸"
    },

    satyanarayan: {
        name: "सत्यनारायण पूजा",
        icon: "🪔"
    },

    vastushanti: {
        name: "वास्तुशांत",
        icon: "🏠"
    },

    vivah: {
        name: "विवाह",
        icon: "💍"
    },

    navchandi: {
        name: "नवचंडी याग",
        icon: "🔥"
    },

    datta: {
        name: "दत्त याग",
        icon: "🙏"
    },

    ganesh: {
        name: "गणेश याग",
        icon: "🐘"
    },

    vishnu: {
        name: "विष्णू याग",
        icon: "🕉️"
    },

    rudra: {
        name: "रुद्र याग",
        icon: "🔱"
    },

    laghurudra: {
        name: "लघुरुद्र अभिषेक",
        icon: "🔱"
    },

    maharudra: {
        name: "महारुद्र",
        icon: "🔥"
    },

    sanskar: {
        name: "षोडश संस्कार",
        icon: "📿"
    },

    janan: {
        name: "जनन शांती",
        icon: "🙏"
    },

    kundali: {
        name: "जन्म पत्रिका",
        icon: "📜"
    }

};


/* ============================================================
   3. REAL GALLERY PHOTO DATA
   ============================================================

   IMPORTANT:

   These paths match the folder structure of your website.

   Example:

   gallery/datta/datta1.jpg

   ============================================================ */

const vedamGallery = [

    /* ========================================================
       SATYANARAYAN
       ======================================================== */

    {
        id: 1,
        title: "सत्यनारायण पूजा",
        category: "satyanarayan",
        categoryName: "सत्यनारायण पूजा",
        image: "gallery/satyanarayan/satyanarayan1.jpg",
        description: "शास्त्रोक्त पद्धतीने सत्यनारायण पूजा विधी."
    },


  /* ========================================================
   VASTUSHANTI
   ======================================================== */

{
    id: 2,
    title: "वास्तुशांत",
    category: "vastushanti",
    categoryName: "वास्तुशांत",
    image: "gallery/vastukshanti/vastu-shanti1.jpg",
    description: "नवीन घरासाठी शास्त्रोक्त वास्तुशांत विधी."
},

{
    id: 3,
    title: "वास्तुशांत",
    category: "vastushanti",
    categoryName: "वास्तुशांत",
    image: "gallery/vastukshanti/vastu-shanti2.jpg",
    description: "वास्तुशांत धार्मिक विधी."
},

{
    id: 4,
    title: "वास्तुशांत",
    category: "vastushanti",
    categoryName: "वास्तुशांत",
    image: "gallery/vastukshanti/vastu-shanti3.jpg",
    description: "शास्त्रोक्त पद्धतीने वास्तुशांत विधी."
},

{
    id: 5,
    title: "वास्तुशांत",
    category: "vastushanti",
    categoryName: "वास्तुशांत",
    image: "gallery/vastukshanti/vastu-shanti4.jpg",
    description: "वास्तुशांत विधीचे क्षणचित्र."
},

{
    id: 6,
    title: "वास्तुशांत",
    category: "vastushanti",
    categoryName: "वास्तुशांत",
    image: "gallery/vastukshanti/vastu-shanti5.jpg",
    description: "वास्तुशांत धार्मिक विधी."
},

{
    id: 7,
    title: "वास्तुशांत",
    category: "vastushanti",
    categoryName: "वास्तुशांत",
    image: "gallery/vastukshanti/vastu-shanti6.jpg",
    description: "शास्त्रोक्त वास्तुशांत विधी."
},

    /* ========================================================
       VIVAH
       ======================================================== */

    {
        id: 8,
        title: "विवाह विधी",
        category: "vivah",
        categoryName: "विवाह",
        image: "gallery/vivah/vivah1.jpg",
        description: "शास्त्रोक्त पद्धतीने विवाह विधी."
    },

    {
        id: 9,
        title: "विवाह विधी",
        category: "vivah",
        categoryName: "विवाह",
        image: "gallery/vivah/vivah2.jpg",
        description: "पारंपरिक विवाह संस्कार."
    },

    {
        id: 10,
        title: "विवाह विधी",
        category: "vivah",
        categoryName: "विवाह",
        image: "gallery/vivah/vivah3.jpg",
        description: "विवाह विधीचे सुंदर क्षणचित्र."
    },

    {
        id: 11,
        title: "विवाह विधी",
        category: "vivah",
        categoryName: "विवाह",
        image: "gallery/vivah/vivah4.jpg",
        description: "शास्त्रोक्त विवाह संस्कार."
    },

    {
        id: 12,
        title: "विवाह विधी",
        category: "vivah",
        categoryName: "विवाह",
        image: "gallery/vivah/vivah5.jpg",
        description: "विवाह सोहळ्याचे क्षणचित्र."
    },


    /* ========================================================
       NAVCHANDI
       ======================================================== */

    {
        id: 13,
        title: "नवचंडी याग",
        category: "navchandi",
        categoryName: "नवचंडी याग",
        image: "gallery/navchandi/navchandi1.jpg",
        description: "शास्त्रोक्त पद्धतीने नवचंडी याग."
    },

    {
        id: 14,
        title: "नवचंडी याग",
        category: "navchandi",
        categoryName: "नवचंडी याग",
        image: "gallery/navchandi/navchandi2.jpg",
        description: "नवचंडी याग धार्मिक विधी."
    },

    {
        id: 15,
        title: "नवचंडी याग",
        category: "navchandi",
        categoryName: "नवचंडी याग",
        image: "gallery/navchandi/navchandi3.jpg",
        description: "नवचंडी यागाचे क्षणचित्र."
    },

    {
        id: 16,
        title: "नवचंडी याग",
        category: "navchandi",
        categoryName: "नवचंडी याग",
        image: "gallery/navchandi/navchandi4.jpg",
        description: "शास्त्रोक्त नवचंडी याग."
    },

    {
        id: 17,
        title: "नवचंडी याग",
        category: "navchandi",
        categoryName: "नवचंडी याग",
        image: "gallery/navchandi/navchandi5.jpg",
        description: "नवचंडी याग धार्मिक विधी."
    },

    {
        id: 18,
        title: "नवचंडी याग",
        category: "navchandi",
        categoryName: "नवचंडी याग",
        image: "gallery/navchandi/navchandi6.jpg",
        description: "नवचंडी यागाचे सुंदर क्षणचित्र."
    },

    {
        id: 19,
        title: "नवचंडी याग",
        category: "navchandi",
        categoryName: "नवचंडी याग",
        image: "gallery/navchandi/navchandi7.jpg",
        description: "शास्त्रोक्त पद्धतीने नवचंडी याग."
    },


    /* ========================================================
       DATTA YAG
       ======================================================== */

    {
        id: 20,
        title: "दत्त याग",
        category: "datta",
        categoryName: "दत्त याग",
        image: "gallery/datta/datta1.jpg",
        description: "शास्त्रोक्त पद्धतीने दत्त याग."
    },

    {
        id: 21,
        title: "दत्त याग",
        category: "datta",
        categoryName: "दत्त याग",
        image: "gallery/datta/datta2.jpg",
        description: "दत्त याग धार्मिक विधी."
    },

    {
        id: 22,
        title: "दत्त याग",
        category: "datta",
        categoryName: "दत्त याग",
        image: "gallery/datta/datta3.jpg",
        description: "दत्त यागाचे क्षणचित्र."
    },

    {
        id: 23,
        title: "दत्त याग",
        category: "datta",
        categoryName: "दत्त याग",
        image: "gallery/datta/datta4.jpg",
        description: "शास्त्रोक्त दत्त याग."
    },

    {
        id: 24,
        title: "दत्त याग",
        category: "datta",
        categoryName: "दत्त याग",
        image: "gallery/datta/datta5.jpg",
        description: "दत्त याग धार्मिक विधी."
    },

    {
        id: 25,
        title: "दत्त याग",
        category: "datta",
        categoryName: "दत्त याग",
        image: "gallery/datta/datta6.jpg",
        description: "दत्त यागाचे सुंदर क्षणचित्र."
    },


    /* ========================================================
       GANESH YAG
       ======================================================== */

    {
        id: 26,
        title: "गणेश याग",
        category: "ganesh",
        categoryName: "गणेश याग",
        image: "gallery/ganesh/ganesh1.jpg",
        description: "शास्त्रोक्त पद्धतीने गणेश याग."
    },

    {
        id: 27,
        title: "गणेश याग",
        category: "ganesh",
        categoryName: "गणेश याग",
        image: "gallery/ganesh/ganesh2.jpg",
        description: "गणेश याग धार्मिक विधी."
    },

    {
        id: 28,
        title: "गणेश याग",
        category: "ganesh",
        categoryName: "गणेश याग",
        image: "gallery/ganesh/ganesh3.jpg",
        description: "गणेश यागाचे क्षणचित्र."
    },


    /* ========================================================
       JANAN SHANTI
       ======================================================== */

    {
        id: 29,
        title: "जनन शांती",
        category: "janan",
        categoryName: "जनन शांती",
        image: "gallery/janan-shanti/janan1.jpg",
        description: "शास्त्रोक्त पद्धतीने जनन शांती विधी."
    },

    {
        id: 30,
        title: "जनन शांती",
        category: "janan",
        categoryName: "जनन शांती",
        image: "gallery/janan-shanti/janan2.jpg",
        description: "जनन शांती धार्मिक विधी."
    },


    /* ========================================================
       LAGHURUDRA
       ======================================================== */

    {
        id: 31,
        title: "लघुरुद्र अभिषेक",
        category: "laghurudra",
        categoryName: "लघुरुद्र अभिषेक",
        image: "gallery/laghurudra/laghurudra1.jpg",
        description: "शास्त्रोक्त पद्धतीने लघुरुद्र अभिषेक."
    },

    {
        id: 32,
        title: "लघुरुद्र अभिषेक",
        category: "laghurudra",
        categoryName: "लघुरुद्र अभिषेक",
        image: "gallery/laghurudra/laghurudra2.jpg",
        description: "लघुरुद्र अभिषेक धार्मिक विधी."
    },

    {
        id: 33,
        title: "लघुरुद्र अभिषेक",
        category: "laghurudra",
        categoryName: "लघुरुद्र अभिषेक",
        image: "gallery/laghurudra/laghurudra3.jpg",
        description: "लघुरुद्र अभिषेकाचे क्षणचित्र."
    },


    /* ========================================================
       RUDRA
       ======================================================== */

    {
        id: 34,
        title: "रुद्र याग",
        category: "rudra",
        categoryName: "रुद्र याग",
        image: "gallery/rudra/rudra1.jpg",
        description: "शास्त्रोक्त पद्धतीने रुद्र याग."
    },

    {
        id: 35,
        title: "रुद्र याग",
        category: "rudra",
        categoryName: "रुद्र याग",
        image: "gallery/rudra/rudra2.jpg",
        description: "रुद्र याग धार्मिक विधी."
    },

    {
        id: 36,
        title: "रुद्र याग",
        category: "rudra",
        categoryName: "रुद्र याग",
        image: "gallery/rudra/rudra3.jpg",
        description: "रुद्र यागाचे क्षणचित्र."
    },


    /* ========================================================
       SANSKAR
       ======================================================== */

    {
        id: 37,
        title: "षोडश संस्कार",
        category: "sanskar",
        categoryName: "षोडश संस्कार",
        image: "gallery/sanskar/sanskar1.jpg",
        description: "षोडश संस्कार शास्त्रोक्त पद्धतीने."
    },

    {
        id: 38,
        title: "षोडश संस्कार",
        category: "sanskar",
        categoryName: "षोडश संस्कार",
        image: "gallery/sanskar/sanskar2.jpg",
        description: "पारंपरिक धार्मिक संस्कार."
    },

    {
        id: 39,
        title: "षोडश संस्कार",
        category: "sanskar",
        categoryName: "षोडश संस्कार",
        image: "gallery/sanskar/sanskar3.jpg",
        description: "षोडश संस्कार विधी."
    },

    {
        id: 40,
        title: "षोडश संस्कार",
        category: "sanskar",
        categoryName: "षोडश संस्कार",
        image: "gallery/sanskar/sanskar4.jpg",
        description: "शास्त्रोक्त संस्कार विधी."
    },

    {
        id: 41,
        title: "षोडश संस्कार",
        category: "sanskar",
        categoryName: "षोडश संस्कार",
        image: "gallery/sanskar/sanskar5.jpg",
        description: "संस्कार विधीचे क्षणचित्र."
    },

    {
        id: 42,
        title: "षोडश संस्कार",
        category: "sanskar",
        categoryName: "षोडश संस्कार",
        image: "gallery/sanskar/sanskar6.jpg",
        description: "पारंपरिक संस्कार विधी."
    },


    /* ========================================================
       VISHNU YAG
       ======================================================== */

    {
        id: 43,
        title: "विष्णू याग",
        category: "vishnu",
        categoryName: "विष्णू याग",
        image: "gallery/vishnu/vishnu1.jpg",
        description: "शास्त्रोक्त पद्धतीने विष्णू याग."
    },

    {
        id: 44,
        title: "विष्णू याग",
        category: "vishnu",
        categoryName: "विष्णू याग",
        image: "gallery/vishnu/vishnu2.jpg",
        description: "विष्णू याग धार्मिक विधी."
    }


    /*
       ========================================================
       KUNDALI
       ========================================================

       Add the exact files from:

       gallery/kundali/

       once their filenames are confirmed.

       ========================================================


       ========================================================
       MAHARUDRA
       ========================================================

       Add the exact files from:

       gallery/maharudra/

       once their filenames are confirmed.
       ========================================================
    */

];


/* ============================================================
   4. GALLERY STATE
   ============================================================ */

let currentGalleryList = [...vedamGallery];

let currentGalleryIndex = 0;

let currentCategory =
    VEDAM_GALLERY_CONFIG.defaultCategory;

let currentSearchText = "";

let touchStartX = 0;

let touchEndX = 0;


/* ============================================================
   5. GET GALLERY ITEM
   ============================================================ */

function getGalleryItemById(id) {

    return vedamGallery.find(
        item => item.id === Number(id)
    );

}


/* ============================================================
   6. GET GALLERY CONTAINER
   ============================================================ */

function getGalleryContainer() {

    return (

        document.getElementById(
            "gallery-grid"
        )

        ||

        document.getElementById(
            "gallery-container"
        )

    );

}


/* ============================================================
   7. CREATE GALLERY CARD
   ============================================================ */

function createGalleryCard(
    item,
    index
) {

    const card =
        document.createElement("article");


    /*
       Use the classes already used
       by your index.html / CSS.
    */

    card.className =
        "gallery-item";


    card.setAttribute(
        "data-category",
        item.category
    );


    card.setAttribute(
        "data-gallery-id",
        item.id
    );


    card.setAttribute(
        "data-gallery-index",
        index
    );


    card.innerHTML = `

        <button
            type="button"
            class="gallery-image-button"
            aria-label="View ${item.title}"
        >

            <img
                src="${item.image}"
                alt="${item.title}"
                class="gallery-image"
                loading="lazy"
            >


            <div class="gallery-overlay">

                <span>
                    🔍
                </span>

                <p>
                    ${item.title}
                </p>

            </div>

        </button>

    `;


    /*
       Open lightbox.
    */

    card.addEventListener(
        "click",
        function () {

            openGalleryLightbox(index);

        }
    );


    return card;

}


/* ============================================================
   8. DISPLAY GALLERY
   ============================================================ */

function displayVedamGallery(
    galleryList = vedamGallery
) {

    const container =
        getGalleryContainer();


    if (!container) {

        console.warn(
            "Vedam Gallery: Gallery container not found."
        );

        return;

    }


    /*
       Clear previous cards.
    */

    container.innerHTML = "";


    /*
       Save current gallery list.
    */

    currentGalleryList =
        [...galleryList];


    /*
       Empty state.
    */

    if (
        galleryList.length === 0
    ) {

        container.innerHTML = `

            <div class="gallery-empty">

                <div class="gallery-empty-icon">
                    📷
                </div>

                <h3>
                    फोटो सापडले नाहीत
                </h3>

                <p>
                    कृपया दुसरी category किंवा search निवडा.
                </p>

            </div>

        `;

        updateGalleryCount(0);

        return;

    }


    /*
       Create gallery cards.
    */

    galleryList.forEach(
        function (item, index) {

            const card =
                createGalleryCard(
                    item,
                    index
                );


            /*
               Stagger animation.
            */

            card.style.animationDelay =
                `${index * VEDAM_GALLERY_CONFIG.animationDelay}ms`;


            container.appendChild(
                card
            );

        }
    );


    updateGalleryCount(
        galleryList.length
    );

}


/* ============================================================
   9. GALLERY COUNT
   ============================================================ */

function updateGalleryCount(
    count
) {

    const countElements =
        document.querySelectorAll(
            ".gallery-count"
        );


    countElements.forEach(
        function (element) {

            element.textContent =
                count;

        }
    );

}


/* ============================================================
   10. CREATE / UPDATE FILTER BUTTONS
   ============================================================ */

function createGalleryFilters() {

    const filterContainer =
        document.getElementById(
            "gallery-filters"
        );


    if (!filterContainer) {

        return;

    }


    /*
       Clear old filter buttons.

       This allows us to automatically add
       all your new categories.
    */

    filterContainer.innerHTML = "";


    Object.keys(
        VEDAM_GALLERY_CATEGORIES
    ).forEach(
        function (category) {

            /*
               Don't show categories which
               currently contain no photos,
               except "all".
            */

            if (
                category !== "all" &&
                !vedamGallery.some(
                    item =>
                        item.category ===
                        category
                )
            ) {

                return;

            }


            const config =
                VEDAM_GALLERY_CATEGORIES[
                    category
                ];


            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "gallery-filter";


            if (
                category ===
                VEDAM_GALLERY_CONFIG.defaultCategory
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.setAttribute(
                "data-filter",
                category
            );


            button.setAttribute(
                "data-gallery-filter",
                category
            );


            button.innerHTML = `

                <span>
                    ${config.icon}
                </span>

                ${config.name}

            `;


            button.addEventListener(
                "click",
                function () {

                    filterVedamGallery(
                        category
                    );

                }
            );


            filterContainer.appendChild(
                button
            );

        }
    );

}


/* ============================================================
   11. FILTER BY CATEGORY
   ============================================================ */

function filterVedamGallery(
    category = "all"
) {

    currentCategory =
        category;


    let filteredGallery;


    if (
        category === "all"
    ) {

        filteredGallery =
            [...vedamGallery];

    } else {

        filteredGallery =
            vedamGallery.filter(
                function (item) {

                    return (
                        item.category ===
                        category
                    );

                }
            );

    }


    /*
       Apply existing search also.
    */

    if (
        currentSearchText
    ) {

        filteredGallery =
            filteredGallery.filter(
                function (item) {

                    return galleryItemMatchesSearch(
                        item,
                        currentSearchText
                    );

                }
            );

    }


    displayVedamGallery(
        filteredGallery
    );


    updateActiveGalleryFilter(
        category
    );

}


/* ============================================================
   12. UPDATE ACTIVE FILTER
   ============================================================ */

function updateActiveGalleryFilter(
    category
) {

    const filterButtons =
        document.querySelectorAll(
            "#gallery-filters .gallery-filter"
        );


    filterButtons.forEach(
        function (button) {

            const buttonCategory =
                button.getAttribute(
                    "data-filter"
                )
                ||

                button.getAttribute(
                    "data-gallery-filter"
                );


            button.classList.toggle(
                "active",
                buttonCategory ===
                category
            );

        }
    );

}


/* ============================================================
   13. SEARCH MATCH FUNCTION
   ============================================================ */

function galleryItemMatchesSearch(
    item,
    query
) {

    const searchableText = (

        item.title +

        " " +

        item.categoryName +

        " " +

        item.description

    ).toLowerCase();


    return searchableText.includes(
        query
    );

}


/* ============================================================
   14. SEARCH GALLERY
   ============================================================ */

function searchVedamGallery(
    searchText
) {

    currentSearchText =
        String(searchText)
            .trim()
            .toLowerCase();


    let sourceGallery;


    /*
       Start from selected category.
    */

    if (
        currentCategory === "all"
    ) {

        sourceGallery =
            [...vedamGallery];

    } else {

        sourceGallery =
            vedamGallery.filter(
                function (item) {

                    return (
                        item.category ===
                        currentCategory
                    );

                }
            );

    }


    /*
       No search.
    */

    if (
        !currentSearchText
    ) {

        displayVedamGallery(
            sourceGallery
        );

        return;

    }


    /*
       Search.
    */

    const results =
        sourceGallery.filter(
            function (item) {

                return galleryItemMatchesSearch(
                    item,
                    currentSearchText
                );

            }
        );


    displayVedamGallery(
        results
    );

}


/* ============================================================
   15. INITIALIZE SEARCH
   ============================================================ */

function initializeGallerySearch() {

    const searchInput =
        document.getElementById(
            "gallery-search"
        );


    /*
       Search box is optional.

       Your current index.html doesn't
       require one for the gallery to work.
    */

    if (!searchInput) {

        return;

    }


    searchInput.addEventListener(
        "input",
        function (event) {

            searchVedamGallery(
                event.target.value
            );

        }
    );

}


/* ============================================================
   16. GET EXISTING LIGHTBOX
   ============================================================ */

function getGalleryLightbox() {

    return document.getElementById(
        "gallery-lightbox"
    );

}


/* ============================================================
   17. OPEN LIGHTBOX
   ============================================================ */

function openGalleryLightbox(
    index
) {

    if (
        !currentGalleryList.length
    ) {

        return;

    }


    currentGalleryIndex =
        Number(index);


    /*
       Safety.
    */

    if (
        currentGalleryIndex < 0
    ) {

        currentGalleryIndex =
            currentGalleryList.length - 1;

    }


    if (
        currentGalleryIndex >=
        currentGalleryList.length
    ) {

        currentGalleryIndex = 0;

    }


    const lightbox =
        getGalleryLightbox();


    if (!lightbox) {

        console.warn(
            "Vedam Gallery: #gallery-lightbox not found."
        );

        return;

    }


    /*
       Show lightbox.
    */

    lightbox.classList.add(
        "active"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "gallery-open"
    );


    /*
       Stop background scrolling.
    */

    document.body.style.overflow =
        "hidden";


    updateLightboxContent();

}


/* ============================================================
   18. UPDATE LIGHTBOX CONTENT
   ============================================================ */

function updateLightboxContent() {

    const item =
        currentGalleryList[
            currentGalleryIndex
        ];


    if (!item) {

        return;

    }


    /*
       Your existing index.html uses:

       #lightbox-image
       #lightbox-title
       #lightbox-prev
       #lightbox-next
       #lightbox-close
    */

    const image =
        document.getElementById(
            "lightbox-image"
        );


    const title =
        document.getElementById(
            "lightbox-title"
        );


    if (image) {

        image.src =
            item.image;

        image.alt =
            item.title;

    }


    if (title) {

        title.textContent =
            item.title;

    }


    /*
       Update counter if the HTML/CSS
       contains one.
    */

    let counter =
        document.getElementById(
            "lightbox-counter"
        );


    if (!counter) {

        counter =
            document.querySelector(
                ".lightbox-counter"
            );

    }


    if (counter) {

        counter.textContent =
            `${currentGalleryIndex + 1} / ${currentGalleryList.length}`;

    }


    /*
       Optional category display.
    */

    let category =
        document.getElementById(
            "lightbox-category"
        );


    if (!category) {

        category =
            document.querySelector(
                ".lightbox-category"
            );

    }


    if (category) {

        category.textContent =
            item.categoryName;

    }

}


/* ============================================================
   19. CLOSE LIGHTBOX
   ============================================================ */

function closeGalleryLightbox() {

    const lightbox =
        getGalleryLightbox();


    if (!lightbox) {

        return;

    }


    lightbox.classList.remove(
        "active"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "gallery-open"
    );


    /*
       Restore page scrolling.
    */

    document.body.style.overflow =
        "";

}


/* ============================================================
   20. NEXT PHOTO
   ============================================================ */

function nextGalleryImage() {

    if (
        !currentGalleryList.length
    ) {

        return;

    }


    currentGalleryIndex++;


    if (
        currentGalleryIndex >=
        currentGalleryList.length
    ) {

        currentGalleryIndex = 0;

    }


    updateLightboxContent();

}


/* ============================================================
   21. PREVIOUS PHOTO
   ============================================================ */

function previousGalleryImage() {

    if (
        !currentGalleryList.length
    ) {

        return;

    }


    currentGalleryIndex--;


    if (
        currentGalleryIndex < 0
    ) {

        currentGalleryIndex =
            currentGalleryList.length - 1;

    }


    updateLightboxContent();

}


/* ============================================================
   22. WHATSAPP ENQUIRY
   ============================================================ */

function openGalleryWhatsApp(
    message
) {

    const encodedMessage =
        encodeURIComponent(
            message
        );


    const url =
        `https://wa.me/${VEDAM_GALLERY_CONFIG.whatsapp}?text=${encodedMessage}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ============================================================
   23. INITIALIZE LIGHTBOX EVENTS
   ============================================================ */

function initializeLightboxEvents() {

    const lightbox =
        getGalleryLightbox();


    if (!lightbox) {

        console.warn(
            "Vedam Gallery: Existing lightbox not found."
        );

        return;

    }


    /*
       Existing close button.
    */

    const closeButton =
        document.getElementById(
            "lightbox-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeGalleryLightbox
        );

    }


    /*
       Previous button.
    */

    const previousButton =
        document.getElementById(
            "lightbox-prev"
        );


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                previousGalleryImage();

            }
        );

    }


    /*
       Next button.
    */

    const nextButton =
        document.getElementById(
            "lightbox-next"
        );


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                nextGalleryImage();

            }
        );

    }


    /*
       Close when clicking outside image.
    */

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                lightbox
            ) {

                closeGalleryLightbox();

            }

        }
    );


    /*
       Keyboard navigation.
    */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                !lightbox.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            switch (
                event.key
            ) {

                case "Escape":

                    closeGalleryLightbox();

                    break;


                case "ArrowRight":

                    nextGalleryImage();

                    break;


                case "ArrowLeft":

                    previousGalleryImage();

                    break;

            }

        }
    );


    /*
       Mobile touch / swipe.
    */

    const lightboxContent =
        lightbox.querySelector(
            ".lightbox-content"
        );


    if (lightboxContent) {

        lightboxContent.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            {
                passive: true
            }
        );


        lightboxContent.addEventListener(
            "touchend",
            function (event) {

                touchEndX =
                    event.changedTouches[0].screenX;


                handleGallerySwipe();

            },
            {
                passive: true
            }
        );

    }

}


/* ============================================================
   24. HANDLE MOBILE SWIPE
   ============================================================ */

function handleGallerySwipe() {

    const swipeDistance =
        touchEndX -
        touchStartX;


    const minimumSwipe =
        50;


    if (
        Math.abs(
            swipeDistance
        ) < minimumSwipe
    ) {

        return;

    }


    if (
        swipeDistance < 0
    ) {

        nextGalleryImage();

    } else {

        previousGalleryImage();

    }

}


/* ============================================================
   25. IMAGE ERROR HANDLING
   ============================================================ */

function initializeGalleryImageErrorHandling() {

    const container =
        getGalleryContainer();


    if (!container) {

        return;

    }


    container.addEventListener(
        "error",
        function (event) {

            if (
                event.target.tagName !==
                "IMG"
            ) {

                return;

            }


            console.warn(
                "Gallery image could not be loaded:",
                event.target.src
            );


            event.target.classList.add(
                "gallery-image-error"
            );

        },
        true
    );

}


/* ============================================================
   26. IMAGE PRELOADING FOR LIGHTBOX
   ============================================================ */

function preloadGalleryImage(
    imagePath
) {

    const image =
        new Image();


    image.src =
        imagePath;

}


/* ============================================================
   27. PRELOAD CURRENT PHOTO
   ============================================================ */

function preloadNearbyGalleryImages() {

    if (
        !currentGalleryList.length
    ) {

        return;

    }


    const current =
        currentGalleryList[
            currentGalleryIndex
        ];


    const nextIndex =
        (
            currentGalleryIndex + 1
        )
        %
        currentGalleryList.length;


    const previousIndex =
        (
            currentGalleryIndex - 1 +
            currentGalleryList.length
        )
        %
        currentGalleryList.length;


    const next =
        currentGalleryList[
            nextIndex
        ];


    const previous =
        currentGalleryList[
            previousIndex
        ];


    if (current) {

        preloadGalleryImage(
            current.image
        );

    }


    if (next) {

        preloadGalleryImage(
            next.image
        );

    }


    if (previous) {

        preloadGalleryImage(
            previous.image
        );

    }

}


/* ============================================================
   28. UPDATED NEXT WITH PRELOADING
   ============================================================ */

const originalNextGalleryImage =
    nextGalleryImage;


nextGalleryImage =
    function () {

        originalNextGalleryImage();

        preloadNearbyGalleryImages();

    };


/* ============================================================
   29. UPDATED PREVIOUS WITH PRELOADING
   ============================================================ */

const originalPreviousGalleryImage =
    previousGalleryImage;


previousGalleryImage =
    function () {

        originalPreviousGalleryImage();

        preloadNearbyGalleryImages();

    };


/* ============================================================
   30. INITIALIZE GALLERY
   ============================================================ */

function initializeVedamGallery() {

    console.log(
        "📸 Vedam Gallery Loading..."
    );


    /*
       Create the complete category filter.
    */

    createGalleryFilters();


    /*
       Display all photos.
    */

    displayVedamGallery(
        vedamGallery
    );


    /*
       Initialize optional search.
    */

    initializeGallerySearch();


    /*
       Initialize existing lightbox.
    */

    initializeLightboxEvents();


    /*
       Handle broken images.
    */

    initializeGalleryImageErrorHandling();


    /*
       Make sure All is active.
    */

    updateActiveGalleryFilter(
        "all"
    );


    console.log(
        `📸 ${vedamGallery.length} real gallery photos loaded`
    );

}


/* ============================================================
   31. AUTOMATIC INITIALIZATION
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeVedamGallery();

    }
);


/* ============================================================
   32. GLOBAL GALLERY API
   ============================================================ */

window.VedamGallery = {

    photos:
        vedamGallery,

    display:
        displayVedamGallery,

    filter:
        filterVedamGallery,

    search:
        searchVedamGallery,

    open:
        openGalleryLightbox,

    close:
        closeGalleryLightbox,

    next:
        nextGalleryImage,

    previous:
        previousGalleryImage,

    get:
        getGalleryItemById,

    categories:
        VEDAM_GALLERY_CATEGORIES

};


/* ============================================================
   33. CONSOLE INFORMATION
   ============================================================ */

console.log(
    `%c📸 VEDAM GALLERY READY — ${vedamGallery.length} PHOTOS`,
    "font-size: 14px; font-weight: bold;"
);


/* ============================================================
   END OF GALLERY.JS
   ============================================================ */