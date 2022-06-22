// ==UserScript==
// @name     Add download all to thingiverse
// @match http[s]{0,1}://(www\.){0,1}thingiverse\.com/thing:\d{1,}.*
// @version  1
// @grant    none
// ==/UserScript=
const addDownloadAllButton = originalDownloadAllButton => {

    const sp = document.createElement('span');
    sp.innerHTML = "(Real) Download All";

    const innerButton = document.createElement('div');
    innerButton.classList.add("i-button");
    innerButton.classList.add("left");
    innerButton.appendChild(sp);

    const newButton = document.createElement('div');
    newButton.classList.add("button");
    newButton.classList.add("button-primary");
    newButton.appendChild(innerButton);
    newButton.addEventListener("click", () => {
        const url = window.location.toString().replaceAll(/\/files/ig, "") + '/zip';
        window.open(url);
    });

    const parent = originalDownloadAllButton.parentElement;

    parent.insertBefore(newButton, originalDownloadAllButton)
};

async function checkElement(selector) {
    let querySelector = null;
    const rafAsync = () => new Promise(requestAnimationFrame)
    while (querySelector === null) {
        await rafAsync();
        querySelector = document.querySelector(selector);
    }
    return querySelector;
}

checkElement('div[class^="SidebarMenu__sideMenuTop"]')
    .then(addDownloadAllButton)