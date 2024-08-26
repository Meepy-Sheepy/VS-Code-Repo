// Select the button element with the class "imageButton"
let confettiButton = document.querySelector(".imageButton");

// Add a click event listener to the button
confettiButton.addEventListener("click", () => {

    if (window.innerWidth > 1400) {
        // Create a canvas element
        let canvas = document.createElement("canvas");

        // Select the container element with the class "container"
        let container = document.querySelector(".grid-container");

        // Set the canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Append the canvas to the container
        container.appendChild(canvas);

        // Create an instance of the confetti generator
        let confetti_instance = confetti.create(canvas, {
            resize: true // Automatically resize canvas on window resize
        });

        // Generate random values for confetti parameters
        let angle = randomInRange(55, 125);
        let spread = randomInRange(50, 70);
        let particleCount = randomInRange(50, 100);

        // Launch confetti with the generated parameters
        confetti_instance({
            angle: angle,
            spread: spread,
            particleCount: particleCount,
            origin: { x: 0 },
        });

        confetti_instance({
            angle: angle,
            spread: spread,
            particleCount: particleCount,
            origin: { x: 1 },
        });

        // Remove the canvas element after confetti animation
        // Remove the canvas after a certain duration
        setTimeout(() => {
            container.removeChild(canvas);
        }, 5000); // Remove after 5 seconds
    }
});

// Function to generate a random number within a range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}