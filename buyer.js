const properties = [
    {
      id: 1,
      title: "4391 Blackland Dr",
      description: "Country Estate",
      location: "Marietta, GA",
      price: "$3,200,000",
      image: "CCE1.jpg.avif"
    },
    {
        id: 2,
        title: "250 Himalaya Ave",
        description: "Country Estate",
        location: "Broomfield, CO",
        price: "$1,465,000",
        image: "CCE2.jpg.avif"
    },
    {
        id: 3,
        title: "13641 Telluride Dr",
        description: "Country Estate",
        location: "Broomfield, CO",
        price: "$795,000",
        image: "CCE3.jpg.avif"
    },
    {
        id: 4,
        title: "2900 Thunderbird Rd",
        description: "Country Estate",
        location: "Sebring, FL",
        price: "$344,000",
        image: "CCE4.jpg.avif"
    },
    {
        id: 5,
        title: "225 Cascade Ln",
        description: "Beach House",
        location: "Riviera Beach, FL",
        price: "$1,549,000",
        image: "BH1.jpg.webp"
    },
    {
        id: 6,
        title: "184 Lake Dr Unit 2103",
        description: "Beach House",
        location: "West Palm Beach, FL",
        price: "$2,775,000",
        image: "BH2.jpg"
    },
    {
        id: 7,
        title: "1051 Hillsboro Mile Unit 608E",
        description: "Beach House",
        location: "Hillsboro Beach, FL",
        price: "$545,000",
        image: "BH3.jpg.avif"
    },
    {
        id: 8,
        title: "1008 NE 26th Ave",
        description: "Beach House",
        location: "Pompano Beach, FL",
        price: "$2,000,000",
        image: "BH4.jpg.webp"
    },
    {
        id: 9,
        title: "The Huntley Luxury Apartments",
        description: "Modern Apartment",
        location: "Atlanta, GA",
        price: "$2,321/mo",
        image: "MA1.webp"
    },
    {
        id: 10,
        title: "Penthouse 19",
        description: "Modern Apartment",
        location: "Los Angeles, CA",
        price: "$85,000/mo",
        image: "MA2.webp"
    },
    {
        id: 11,
        title: "Wilmington Island Apartments",
        description: "Modern Apartment",
        location: "Savannah, GA",
        price: "$7,500/mo",
        image: "MA3.webp"
    },
    {
        id: 12,
        title: "2901 Collins Ave #1602",
        description: "Modern Apartment",
        location: "Miami Beach, FL",
        price: "$150,000/mo",
        image: "MA4.webp"
    },
];
  
// Wishlist (could be stored in local storage or a database)
let wishlist = [];
  
// Function to display welcome message
function displayWelcomeMessage() {
    setTimeout(function() {
        // Check if it's the user's first login
        let isFirstLogin = localStorage.getItem('firstLogin') === null;

        if (isFirstLogin) {
            // Show the welcome modal for the first-time user
            document.getElementById("welcome-modal").style.display = 'block';
            
            // Set the flag in localStorage to indicate that the user has logged in before
            localStorage.setItem('firstLogin', 'false');
        } else {
            // Hide the welcome modal for subsequent logins
            document.getElementById("welcome-modal").style.display = 'none';
        }
    }, 2000); // Delay for modal appearance
}

// Function to close the welcome modal
document.getElementById("close-btn").onclick = function() {
    document.getElementById("welcome-modal").style.display = 'none';
}

// Function to display welcome message
function displayWelcomeMessage() {
    setTimeout(function() {
        if (isFirstLogin) {
            document.getElementById("welcome-modal").style.display = 'block';
        } else {
            document.getElementById("welcome-modal").style.display = 'none';
        }
    }, 2000);
}
  
// Function to render property cards
function renderProperties(filteredProperties = properties) {
    const propertyList = document.getElementById("property-list");
    propertyList.innerHTML = ''; // Clear previous listings

    filteredProperties.forEach(property => {
        const card = document.createElement("div");
        card.classList.add("property-card");

        // Create an anchor tag wrapping the entire card (or just the image)
        const propertyLink = document.createElement("a");
        propertyLink.href = `property-${property.id}.html`;  // Link to specific HTML page for each property
        propertyLink.style.textDecoration = "none";  
        propertyLink.style.color = "black";

        // Set the inner HTML of the card
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h4>${property.title}</h4>
            <p>${property.description}</p>
            <p>${property.location}</p>
            <p><strong>Price:</strong> ${property.price}</p>
            <button onclick="addToWishlist(${property.id}); event.preventDefault();">Add to Wishlist</button>
        `;
      
        // Append the card to the propertyLink and then append the propertyLink to the property list
        propertyLink.appendChild(card);
        propertyList.appendChild(propertyLink);
    });
}
  
// Function to render wishlist cards
function renderWishlist() {
    const wishlistContainer = document.getElementById("wishlist-container");
    wishlistContainer.innerHTML = '';  // Clear previous wishlist
    
    wishlist.forEach(propertyId => {
        const property = properties.find(p => p.id === propertyId);
        const card = document.createElement("div");
        card.classList.add("wishlist-card");
      
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h4>${property.title}</h4>
            <p>${property.description}</p>
            <p>${property.location}</p>
            <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
            <button onclick="removeFromWishlist(${property.id})">Remove from Wishlist</button>
        `;
      
        wishlistContainer.appendChild(card);
    });
}
  
// Function to handle search functionality
function searchProperties() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredProperties = properties.filter(property =>
        property.title.toLowerCase().includes(searchTerm) ||
        property.description.toLowerCase().includes(searchTerm)
    );
    
    renderProperties(filteredProperties);
}

// Function to apply filters
function applyFilters() {
    const propertyType = document.getElementById('property-type').value;
    const location = document.getElementById('location').value;
    const priceRange = document.getElementById('price-range').value;

    const filteredProperties = properties.filter(property => {
        let matches = true;

        // Filter by property type
        if (propertyType && property.description !== propertyType) {
            matches = false;
        }

        // Filter by state (location is in the format "City, State")
        if (location) {
            const propertyState = property.location.split(', ')[1];  // Extract state
            if (propertyState !== location) {
                matches = false;
            }
        }

        // Filter by price range
        if (priceRange) {
            // Remove dollar sign and commas to compare as numbers
            const [minPrice, maxPrice] = priceRange.split('-').map(price => {
                return parseInt(price.replace(/[^0-9]/g, ''));  // Strip '$' and commas
            });

            const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, '')); // Price without '$' and commas

            if (maxPrice && (propertyPrice < minPrice || propertyPrice > maxPrice)) {
                matches = false;
            } else if (!maxPrice && propertyPrice < minPrice) {
                matches = false;
            }
        }

        return matches;
    });

    renderProperties(filteredProperties);
}

// Function to remove property from wishlist
function removeFromWishlist(propertyId) {
    // Remove the propertyId from the wishlist array
    wishlist = wishlist.filter(id => id !== propertyId);
    
    // Re-render the wishlist after removal
    renderWishlist();

    alert("Property removed from your wishlist.");
}

  
// Function to add property to wishlist
function addToWishlist(propertyId) {
    if (!wishlist.includes(propertyId)) {
        wishlist.push(propertyId);
        renderWishlist(); // Re-render wishlist after adding a property
        alert("Property added to your wishlist!");
    } else {
        alert("This property is already in your wishlist.");
    }
}

// Toggle Dropdown Menu
function toggleDropdown() {
    const dropdown = document.getElementById("user-dropdown");
    // Toggle visibility of the dropdown menu
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Go to Seller Dashboard
function goToSellerDashboard() {
    window.location.href = '/seller-dashboard'; // Update the URL accordingly
}

// Sign Out Action
function signOut() {
    // Perform sign out actions (e.g., clear session, log out, etc.)
    alert("You have signed out.");
    window.location.href = '/login'; // Redirect to login page after sign out
}

// Function to close the welcome modal
document.getElementById("close-btn").onclick = function() {
    document.getElementById("welcome-modal").style.display = 'none';
}
  
// Initialize dashboard
displayWelcomeMessage();
renderProperties();  // Render all properties initially
  
  
