// BISHTDROP JAVASCRIPT

// MOBILE MENU TOGGLE
function toggleMobileMenu() {
    const navMenu = document.querySelector(".nav-menu");

    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.background = "#000";
        navMenu.style.position = "absolute";
        navMenu.style.top = "70px";
        navMenu.style.right = "20px";
        navMenu.style.padding = "20px";
        navMenu.style.borderRadius = "10px";
    }
}

// ADD TO CART
function addToCart(productId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(productId);

    localStorage.setItem("cart", JSON.stringify(cart));

    showToast("Product Added To Cart 🛒");
}

// TOAST MESSAGE
function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#ff6b35";
    toast.style.color = "#fff";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "10px";
    toast.style.fontWeight = "bold";
    toast.style.zIndex = "9999";
    toast.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ACTIVE NAV LINK
function setActiveLink() {

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {

        if (link.href === window.location.href) {
            link.classList.add("active");
        }

    });
}

// NEWSLETTER SUBMIT
function handleNewsletterSubmit(event) {

    event.preventDefault();

    showToast("Thanks For Subscribing ❤️");

    event.target.reset();
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// PAGE LOAD
window.onload = () => {

    setActiveLink();

    console.log("BishtDrop Website Loaded Successfully 🚀");

};

// SIMPLE SEARCH FILTER
function searchProducts() {

    const input = document.getElementById("searchInput");

    if(!input) return;

    const filter = input.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const title = card.querySelector(".card-title");

        if(title.innerText.toLowerCase().includes(filter)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

// DARK MODE TOGGLE
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

}

// LOAD SAVED THEME
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}

// BACK TO TOP BUTTON
const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.left = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#ff6b35";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

// SHOW BUTTON ON SCROLL
window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

// SCROLL TO TOP
topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});