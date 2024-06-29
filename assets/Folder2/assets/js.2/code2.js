document.addEventListener("DOMContentLoaded", function () {
    // Example of an animation on load
    const header = document.querySelector("header h1");
    header.style.opacity = 0;
    header.style.transition = "opacity 2s";
    setTimeout(() => {
        header.style.opacity = 1;
    }, 500);

    const images = document.querySelectorAll(".image-container img");
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            let message;
            switch (index) {
                case 0:
                    message ="I can't imagine my life without you!"
                    break;
                case 1:
                    message = "I am scared to lose you!";
                    break;
                case 2:
                    message = "Vadhileyaku ra nannu brathakaleanu nuvvu lekunda!";
                    break;
                default:
                    message ="I can't imagine my life without you!";
            }
            alert(message);
        });
    });
    
});