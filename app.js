document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language");

    languageSelector.addEventListener("change", function () {
        const selectedLang = this.value;
        loadTranslations(selectedLang);
    });


    loadTranslations(languageSelector.value);
});

function loadTranslations(lang) {
    fetch("lang.json")
        .then(response => response.json())
        .then(data => {

            for (let key in data[lang]) {
                let element = document.getElementById(key);
                if (element) {
                    element.textContent = data[lang][key];
                }
            }


            document.querySelectorAll("[data-key]").forEach(el => {
                const key = el.getAttribute("data-key");
                if (data[lang][key]) {
                    el.textContent = data[lang][key];
                }
            });

        })
        .catch(error => console.error("Tarjima yuklashda xatolik yuz berdi!", error));
}






const nav = document.querySelector('nav_menu')
const menu = document.querySelector('menu_btn')
menu.addEventListener('click',function(){
    nav.classList.toggle('active');
})