const translations = {
    it: {
        home: "Home",
        download: "Download",
        docs: "Documentazione"
    }
};

function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

applyLang("it");
