document.addEventListener('DOMContentLoaded', function() {
    const nbr = 3; // Vous avez trois images
    const blockPhoto = document.getElementById("block-photo");
    let currentIndex = 0;

    // Remplir le carrousel avec des images
    for (let i = 1; i <= nbr; i++) {
        const div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = `url('images/im${i}.jpg')`; // Assurez-vous que le chemin est correct
        block-Photo.appendChild(div);
    }

    // Ajout des écouteurs d'événements sur les boutons
    document.getElementById('g').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
        blockPhoto.style.transform = `translateX(-${800 * currentIndex}px)`;
    });

    document.getElementById('d').addEventListener('click', function() {
        currentIndex = (currentIndex < nbr - 1) ? currentIndex + 1 : nbr - 1;
        blockPhoto.style.transform = `translateX(-${800 * currentIndex}px)`;
    });
});
