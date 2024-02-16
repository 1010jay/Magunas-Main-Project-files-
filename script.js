document.addEventListener("DOMContentLoaded", function() {
    var navContent = document.getElementById("navContent");
    var contents = [
        "Shop Smarter, Eat Better: Your One-Stop Supermarket Solution!",
        "Shop For Fresh Groceries!",
        "Find Amazing Discounts!",
        "Fresh Finds Await: Dive into Flavor at Every Aisle!"
        // Add "Fresh Finds Await: Dive into Flavor at Every Aisle!"    more content items as needed
    ];
    var currentIndex = 0;

    setInterval(function() {
        currentIndex = (currentIndex + 1) % contents.length;
        navContent.innerHTML = "<h2>" + contents[currentIndex] + "</h2>";
    }, 3000); // Change content every 3 seconds
});
// List of image URLs
const images = [
    "City_Walk.png",
    "Hisense_rvsd.png",
    "Nivea_300.jpg",
    "phones.jpg",
    "PRK_300.jpg",
    "vitron.jpg",
    "Xiaomi_300.jpg",
    "Amtec_rvsd.png"
];

// Index of the current image
let currentIndex = 0;

// Function to change the image
function changeImage() {
    // Increment the index
    currentIndex++;

    // Reset index if it exceeds the length of the images array
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Get the image element
    const imgElement = document.getElementById("changing-image");

    // Change the image source
    imgElement.src = images[currentIndex];
}

// Call the changeImage function every 5 seconds (5000 milliseconds)
setInterval(changeImage, 3000);


document.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var otherProducts = document.getElementById('other-products');
    var rect = otherProducts.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    // If the top of the other-products container is within the viewport, add the 'scrolled' class
    if (rect.top < windowHeight && rect.bottom >= 0) {
        document.getElementById('other-products').classList.add('scrolled');
    }
});
