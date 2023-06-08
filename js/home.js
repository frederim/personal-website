(function() {
        function on_dom_loaded() {
            const images = [
                "backgrounds\\black.jpg",
                "bachytopo.jpg",
            ];

            const i = Math.floor(Math.random() * images.length);

            if (i > 0) {
                const body = document.querySelector('body');
                body.style.backgroundImage = `url("images/backgrounds/${images[i]}")`;
            }
        }

        window.addEventListener("DOMContentLoaded", on_dom_loaded);
    }())