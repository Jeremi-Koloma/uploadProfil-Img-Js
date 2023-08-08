// Récuperons les balise img et input dans le fichier html
const image = document.querySelector("img");
let input = document.querySelector("input");

// Ajoutons un écouter à notre variable input
input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
}, false);
