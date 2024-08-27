document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const bannerText = document.querySelector('.banner-text');
    
    // Function to add 'loaded' class to both image and banner text
    const addLoadedClass = () => {
        mainImage.classList.add('loaded');
        bannerText.classList.add('loaded');
    };

    // Load the image initially and add the loaded class when done
    mainImage.onload = addLoadedClass;

    // If the image is already cached, trigger onload manually
    if (mainImage.complete) {
        addLoadedClass();
    }
});

function changeContent(src, title, description, buttonText) {
    const mainImage = document.getElementById('mainImage');
    const bannerTitle = document.getElementById('bannerTitle');
    const bannerDescription = document.getElementById('bannerDescription');
    const bannerButton = document.getElementById('bannerButton');
    const bannerText = document.querySelector('.banner-text');

    // Remove the loaded class to trigger animations
    mainImage.classList.remove('loaded');
    bannerText.classList.remove('loaded');
    
    // Delay the changes to allow animations to complete
    setTimeout(() => {
        mainImage.src = src;
        bannerTitle.textContent = title;
        bannerDescription.textContent = description;
        bannerButton.textContent = buttonText;

        mainImage.onload = () => {
            mainImage.classList.add('loaded');
            bannerText.classList.add('loaded');
        };

        // If the new image is already cached, trigger onload manually
        if (mainImage.complete) {
            mainImage.onload();
        }
    }, 500);
}
