/* ============================================================
   VEDAM DHARMIK VIDHI KENDRA
   Services JavaScript
   ------------------------------------------------------------
   Handles:
   - Puja / Vidhi services
   - Service cards
   - Search
   - Service details
   - WhatsApp enquiry
   - Phone enquiry
   ============================================================ */


/* ============================================================
   1. BUSINESS INFORMATION
   ============================================================ */

const VEDAM_BUSINESS = {
    name: "वेदम धार्मिक विधी केंद्र",

    phonePrimary: "7350325936",
    phoneSecondary: "7385325936",

    whatsapp: "917350325936",

    location: "आंबेगाव पठार, पुणे",

    email: "Pratap.inamdar.3915@gmail.com"
};


/* ============================================================
   2. SERVICES DATA
   ============================================================ */

const vedamServices = [

    {
        id: 1,
        name: "सत्यनारायण पूजा",
        shortName: "सत्यनारायण पूजा",
        icon: "🪔",
        image: "gallery/satyanarayan.jpg",

        description:
            "शास्त्रोक्त पद्धतीने सत्यनारायण पूजा व कथा विधी करून दिली जाते.",

        details:
            "सत्यनारायण पूजा ही शुभ कार्य, घरातील सुख-समृद्धी आणि मंगल प्रसंगांसाठी केली जाणारी धार्मिक पूजा आहे. पूजा शास्त्रोक्त पद्धतीने योग्य मंत्र व विधीनुसार केली जाते."
    },

    {
        id: 2,
        name: "वास्तुशांत",
        shortName: "वास्तुशांत",
        icon: "🏠",
        image: "gallery/vastushanti.jpg",

        description:
            "नवीन घर, वास्तू किंवा व्यवसायाच्या ठिकाणी शास्त्रोक्त वास्तुशांत विधी.",

        details:
            "नवीन घरात प्रवेश करण्यापूर्वी किंवा वास्तूशी संबंधित धार्मिक विधींसाठी शास्त्रोक्त पद्धतीने वास्तुशांत केली जाते."
    },

    {
        id: 3,
        name: "विवाह",
        shortName: "विवाह विधी",
        icon: "💍",
        image: "gallery/vivah.jpg",

        description:
            "विवाह सोहळ्यासाठी आवश्यक धार्मिक विधी व मंत्रोच्चार.",

        details:
            "विवाह विधीमध्ये पारंपरिक व शास्त्रोक्त पद्धतीने आवश्यक धार्मिक विधी, मंत्रोच्चार आणि संस्कार केले जातात."
    },

    {
        id: 4,
        name: "नवचंडी याग",
        shortName: "नवचंडी याग",
        icon: "🔥",
        image: "gallery/navchandi.jpg",

        description:
            "शास्त्रोक्त पद्धतीने नवचंडी याग व संबंधित धार्मिक विधी.",

        details:
            "नवचंडी याग हा देवी उपासनेशी संबंधित धार्मिक याग असून तो शास्त्रोक्त पद्धतीने मंत्रोच्चार व विधीनुसार केला जातो."
    },

    {
        id: 5,
        name: "दत्त याग",
        shortName: "दत्त याग",
        icon: "🕉️",
        image: "gallery/yag.jpg",

        description:
            "श्री दत्तात्रेय उपासनेसाठी शास्त्रोक्त दत्त याग.",

        details:
            "श्री दत्तात्रेय उपासनेसाठी शास्त्रोक्त पद्धतीने दत्त याग व संबंधित धार्मिक विधी केले जातात."
    },

    {
        id: 6,
        name: "गणेश याग",
        shortName: "गणेश याग",
        icon: "🐘",
        image: "gallery/yag.jpg",

        description:
            "श्री गणेश उपासनेसाठी शास्त्रोक्त गणेश याग.",

        details:
            "श्री गणेशाच्या उपासनेसाठी शास्त्रोक्त मंत्र, पूजा व याग विधी योग्य पद्धतीने केले जातात."
    },

    {
        id: 7,
        name: "विष्णू याग",
        shortName: "विष्णू याग",
        icon: "🪔",
        image: "gallery/yag.jpg",

        description:
            "श्री विष्णू उपासनेसाठी शास्त्रोक्त विष्णू याग.",

        details:
            "श्री विष्णू उपासनेसाठी आवश्यक मंत्रोच्चार व धार्मिक विधी शास्त्रोक्त पद्धतीने केले जातात."
    },

    {
        id: 8,
        name: "रुद्र याग",
        shortName: "रुद्र याग",
        icon: "🔱",
        image: "gallery/rudra.jpg",

        description:
            "भगवान शिवाच्या उपासनेसाठी शास्त्रोक्त रुद्र याग.",

        details:
            "भगवान शिवाच्या उपासनेसाठी रुद्र याग शास्त्रोक्त मंत्रोच्चार आणि धार्मिक विधीनुसार केला जातो."
    },

    {
        id: 9,
        name: "लघुरुद्र अभिषेक",
        shortName: "लघुरुद्र अभिषेक",
        icon: "🔱",
        image: "gallery/rudra.jpg",

        description:
            "भगवान शिवासाठी लघुरुद्र अभिषेक व धार्मिक विधी.",

        details:
            "लघुरुद्र अभिषेक हा भगवान शिवाच्या उपासनेशी संबंधित धार्मिक विधी असून तो शास्त्रोक्त पद्धतीने केला जातो."
    },

    {
        id: 10,
        name: "महारुद्र",
        shortName: "महारुद्र",
        icon: "🔥",
        image: "gallery/rudra.jpg",

        description:
            "शास्त्रोक्त पद्धतीने महारुद्र धार्मिक विधी.",

        details:
            "महारुद्र विधीमध्ये शास्त्रोक्त मंत्रोच्चार, अभिषेक आणि धार्मिक विधी नियमानुसार केले जातात."
    },

    {
        id: 11,
        name: "षोडश संस्कार",
        shortName: "षोडश संस्कार",
        icon: "ॐ",
        image: "gallery/sanskar.jpg",

        description:
            "हिंदू धर्मातील विविध षोडश संस्कार शास्त्रोक्त पद्धतीने.",

        details:
            "हिंदू धर्मपरंपरेतील विविध संस्कार शास्त्रोक्त पद्धतीने आणि योग्य धार्मिक विधीनुसार केले जातात."
    },

    {
        id: 12,
        name: "सर्व प्रकारच्या जनन शांती",
        shortName: "जनन शांती",
        icon: "🪔",
        image: "gallery/sanskar.jpg",

        description:
            "जनन शांतीसाठी आवश्यक धार्मिक विधी व मार्गदर्शन.",

        details:
            "जनन शांतीसाठी आवश्यक धार्मिक विधी शास्त्रोक्त पद्धतीने केले जातात. विधीपूर्वी योग्य मार्गदर्शन दिले जाते."
    },

    {
        id: 13,
        name: "जन्म पत्रिका काढणे",
        shortName: "जन्म पत्रिका",
        icon: "📜",
        image: "gallery/sanskar.jpg",

        description:
            "जन्मतारीख, वेळ आणि जन्मस्थळाच्या आधारे जन्म पत्रिका तयार करणे.",

        details:
            "जन्मतारीख, जन्मवेळ आणि जन्मस्थळाच्या आधारे जन्म पत्रिका काढण्यासाठी मार्गदर्शन उपलब्ध आहे."
    },

    {
        id: 14,
        name: "जन्म पत्रिकेवरून योग्य मार्गदर्शन",
        shortName: "जन्म पत्रिका मार्गदर्शन",
        icon: "📜",
        image: "gallery/sanskar.jpg",

        description:
            "जन्म पत्रिकेच्या आधारे योग्य मार्गदर्शन व माहिती.",

        details:
            "जन्म पत्रिकेतील माहितीच्या आधारे विविध विषयांबाबत योग्य मार्गदर्शन दिले जाते."
    }

];


/* ============================================================
   3. GET SERVICE BY ID
   ============================================================ */

function getVedamServiceById(serviceId) {

    return vedamServices.find(
        service => service.id === Number(serviceId)
    );
}


/* ============================================================
   4. WHATSAPP ENQUIRY
   ============================================================ */

function contactVedamWhatsApp(serviceName = "") {

    let message;

    if (serviceName) {

        message =
            `नमस्कार 🙏%0A%0A` +
            `मला "${serviceName}" या विधीबद्दल माहिती हवी आहे.%0A` +
            `कृपया विधीची माहिती व उपलब्ध तारीख याबद्दल मार्गदर्शन करावे.%0A%0A` +
            `धन्यवाद.`;

    } else {

        message =
            `नमस्कार 🙏%0A%0A` +
            `मला वेदम धार्मिक विधी केंद्राच्या धार्मिक विधींबद्दल माहिती हवी आहे.%0A%0A` +
            `कृपया मार्गदर्शन करावे.%0A%0A` +
            `धन्यवाद.`;
    }

    const whatsappURL =
        `https://wa.me/${VEDAM_BUSINESS.whatsapp}?text=${message}`;

    window.open(whatsappURL, "_blank");
}


/* ============================================================
   5. PHONE CALL
   ============================================================ */

function callVedam(phoneNumber = VEDAM_BUSINESS.phonePrimary) {

    window.location.href = `tel:${phoneNumber}`;

}


/* ============================================================
   6. CREATE SERVICE CARD
   ============================================================ */

function createServiceCard(service) {

    const card = document.createElement("div");

    card.className = "service-card";

    card.setAttribute("data-service-id", service.id);

    card.innerHTML = `

        <div class="service-image-wrapper">

            <img
                src="${service.image}"
                alt="${service.name}"
                class="service-image"
                loading="lazy"
            >

            <div class="service-icon">
                ${service.icon}
            </div>

        </div>


        <div class="service-card-content">

            <h3>
                ${service.name}
            </h3>

            <p>
                ${service.description}
            </p>


            <div class="service-card-actions">

                <button
                    class="service-details-btn"
                    data-service-id="${service.id}"
                    type="button"
                >
                    अधिक माहिती
                </button>


                <button
                    class="service-whatsapp-btn"
                    data-service-id="${service.id}"
                    type="button"
                    aria-label="WhatsApp enquiry"
                >
                    WhatsApp
                </button>

            </div>

        </div>

    `;

    return card;
}


/* ============================================================
   7. DISPLAY ALL SERVICES
   ============================================================ */

function displayVedamServices(serviceList = vedamServices) {

    const servicesContainer =
        document.getElementById("services-container");

    if (!servicesContainer) {

        console.warn(
            "Services container not found: #services-container"
        );

        return;
    }


    servicesContainer.innerHTML = "";


    if (serviceList.length === 0) {

        servicesContainer.innerHTML = `

            <div class="no-services">

                <div class="no-services-icon">
                    🔍
                </div>

                <h3>
                    सेवा सापडली नाही
                </h3>

                <p>
                    कृपया दुसऱ्या नावाने शोधा.
                </p>

            </div>

        `;

        return;
    }


    serviceList.forEach(service => {

        const card =
            createServiceCard(service);

        servicesContainer.appendChild(card);

    });


    attachServiceButtonEvents();
}


/* ============================================================
   8. SERVICE DETAILS MODAL
   ============================================================ */

function showServiceDetails(serviceId) {

    const service =
        getVedamServiceById(serviceId);

    if (!service) {

        console.error(
            "Service not found:",
            serviceId
        );

        return;
    }


    let modal =
        document.getElementById("service-modal");


    /*
       If modal does not exist in HTML,
       create it automatically.
    */

    if (!modal) {

        modal =
            document.createElement("div");

        modal.id = "service-modal";

        modal.className =
            "service-modal";

        document.body.appendChild(modal);

    }


    modal.innerHTML = `

        <div class="service-modal-overlay"></div>

        <div
            class="service-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
        >

            <button
                class="service-modal-close"
                id="service-modal-close"
                type="button"
                aria-label="Close"
            >
                ×
            </button>


            <img
                src="${service.image}"
                alt="${service.name}"
                class="service-modal-image"
            />


            <div class="service-modal-body">

                <div class="service-modal-icon">
                    ${service.icon}
                </div>


                <h2 id="service-modal-title">
                    ${service.name}
                </h2>


                <p class="service-modal-description">
                    ${service.description}
                </p>


                <div class="service-modal-details">

                    <h3>
                        विधीबद्दल माहिती
                    </h3>

                    <p>
                        ${service.details}
                    </p>

                </div>


                <div class="service-modal-actions">

                    <button
                        type="button"
                        class="modal-whatsapp-btn"
                        id="modal-whatsapp-btn"
                    >
                        💬 WhatsApp वर चौकशी करा
                    </button>


                    <button
                        type="button"
                        class="modal-call-btn"
                        id="modal-call-btn"
                    >
                        📞 संपर्क करा
                    </button>

                </div>

            </div>

        </div>

    `;


    modal.classList.add("active");

    document.body.classList.add("modal-open");


    /* Close button */

    const closeButton =
        document.getElementById(
            "service-modal-close"
        );

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeServiceModal
        );

    }


    /* Overlay */

    const overlay =
        modal.querySelector(
            ".service-modal-overlay"
        );

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeServiceModal
        );

    }


    /* WhatsApp */

    const whatsappButton =
        document.getElementById(
            "modal-whatsapp-btn"
        );

    if (whatsappButton) {

        whatsappButton.addEventListener(
            "click",
            () => {

                contactVedamWhatsApp(
                    service.name
                );

            }
        );

    }


    /* Phone */

    const callButton =
        document.getElementById(
            "modal-call-btn"
        );

    if (callButton) {

        callButton.addEventListener(
            "click",
            () => {

                callVedam();

            }
        );

    }


    /* ESC key */

    document.addEventListener(
        "keydown",
        handleModalEscape
    );

}


/* ============================================================
   9. CLOSE SERVICE MODAL
   ============================================================ */

function closeServiceModal() {

    const modal =
        document.getElementById(
            "service-modal"
        );

    if (!modal) {

        return;

    }


    modal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );


    document.removeEventListener(
        "keydown",
        handleModalEscape
    );

}


/* ============================================================
   10. ESCAPE KEY FOR MODAL
   ============================================================ */

function handleModalEscape(event) {

    if (event.key === "Escape") {

        closeServiceModal();

    }

}


/* ============================================================
   11. ATTACH SERVICE BUTTON EVENTS
   ============================================================ */

function attachServiceButtonEvents() {

    /*
       More Information buttons
    */

    const detailsButtons =
        document.querySelectorAll(
            ".service-details-btn"
        );


    detailsButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const serviceId =
                    button.dataset.serviceId;

                showServiceDetails(serviceId);

            }
        );

    });


    /*
       WhatsApp buttons
    */

    const whatsappButtons =
        document.querySelectorAll(
            ".service-whatsapp-btn"
        );


    whatsappButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const serviceId =
                    button.dataset.serviceId;


                const service =
                    getVedamServiceById(
                        serviceId
                    );


                if (service) {

                    contactVedamWhatsApp(
                        service.name
                    );

                }

            }
        );

    });

}


/* ============================================================
   12. SERVICE SEARCH
   ============================================================ */

function searchVedamServices(searchText) {

    const query =
        String(searchText)
            .trim()
            .toLowerCase();


    if (!query) {

        displayVedamServices(
            vedamServices
        );

        return;

    }


    const filteredServices =
        vedamServices.filter(service => {

            return (

                service.name
                    .toLowerCase()
                    .includes(query)

                ||

                service.shortName
                    .toLowerCase()
                    .includes(query)

                ||

                service.description
                    .toLowerCase()
                    .includes(query)

            );

        });


    displayVedamServices(
        filteredServices
    );

}


/* ============================================================
   13. SEARCH INPUT INITIALIZATION
   ============================================================ */

function initializeServiceSearch() {

    const searchInput =
        document.getElementById(
            "service-search"
        );


    if (!searchInput) {

        return;

    }


    searchInput.addEventListener(
        "input",
        event => {

            searchVedamServices(
                event.target.value
            );

        }
    );

}


/* ============================================================
   14. SERVICE CATEGORY FILTER
   ============================================================ */

function filterServicesByCategory(category) {

    if (
        !category ||
        category === "all"
    ) {

        displayVedamServices(
            vedamServices
        );

        return;

    }


    const filteredServices =
        vedamServices.filter(
            service => {

                return service.category === category;

            }
        );


    displayVedamServices(
        filteredServices
    );

}


/* ============================================================
   15. GLOBAL CONTACT BUTTONS
   ============================================================ */

function initializeContactButtons() {

    /*
       WhatsApp buttons
       Any element with:
       data-contact="whatsapp"
    */

    const whatsappButtons =
        document.querySelectorAll(
            '[data-contact="whatsapp"]'
        );


    whatsappButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                contactVedamWhatsApp();

            }
        );

    });


    /*
       Phone buttons
       data-contact="phone"
    */

    const phoneButtons =
        document.querySelectorAll(
            '[data-contact="phone"]'
        );


    phoneButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                callVedam();

            }
        );

    });


    /*
       Second phone number
       data-contact="phone-secondary"
    */

    const secondaryPhoneButtons =
        document.querySelectorAll(
            '[data-contact="phone-secondary"]'
        );


    secondaryPhoneButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                callVedam(
                    VEDAM_BUSINESS.phoneSecondary
                );

            }
        );

    });

}


/* ============================================================
   16. SERVICE COUNTER
   ============================================================ */

function updateServiceCount() {

    const countElements =
        document.querySelectorAll(
            ".service-count"
        );


    countElements.forEach(element => {

        element.textContent =
            vedamServices.length;

    });

}


/* ============================================================
   17. INITIALIZE SERVICES
   ============================================================ */

function initializeVedamServices() {

    console.log(
        "🙏 Vedam Dharmik Vidhi Kendra - Services Loaded"
    );


    displayVedamServices();

    initializeServiceSearch();

    initializeContactButtons();

    updateServiceCount();

}


/* ============================================================
   18. START WHEN PAGE LOADS
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeVedamServices();

    }
);


/* ============================================================
   19. MAKE IMPORTANT FUNCTIONS AVAILABLE GLOBALLY
   ============================================================ */

window.VedamServices = {

    services: vedamServices,

    getService:
        getVedamServiceById,

    search:
        searchVedamServices,

    filter:
        filterServicesByCategory,

    showDetails:
        showServiceDetails,

    closeModal:
        closeServiceModal,

    whatsapp:
        contactVedamWhatsApp,

    call:
        callVedam

};


/* ============================================================
   END OF SERVICES.JS
   ============================================================ */