const versionButton = document.getElementById("versionButton");
const versionMenu = document.getElementById("versionMenu");
const selectedVersion = document.getElementById("selectedVersion");
const downloadBtn = document.getElementById("downloadBtn");

versionButton.addEventListener("click", () => {
    versionMenu.classList.toggle("open");
});

document.querySelectorAll(".version-option").forEach(option => {

    option.addEventListener("click", () => {

        const file = option.dataset.file;
        const label = option.dataset.label;

        selectedVersion.innerHTML = option.innerHTML;

        downloadBtn.href = `/snode-project/zips/${file}.zip`;

        versionMenu.classList.remove("open");
    });

});
