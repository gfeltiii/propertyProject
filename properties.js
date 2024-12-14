let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = "block";  
}

// Show next/previous slides
function plusSlides(n) {
    showSlidesManually(slideIndex += n);
}

// Show the specific slide based on the index
function showSlidesManually(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Initialize the slideshow
showSlides();

function calculateTax() {
    const propertyValue = 150000; // Example property value in USD
    const taxRate = 0.07; // 7% tax rate
    const tax = propertyValue * taxRate;

    document.getElementById('tax-result').textContent = `Property Tax: $${tax.toFixed(2)}`;
}
