const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const cartBtnDesktop = document.getElementById('cart-btn-desktop');
const cartBtnMobile = document.getElementById('cart-btn-mobile');
const cartSidebar = document.getElementById('cart-sidebar');
const cartCloseBtn = document.getElementById('cart-close');
const allMobileMenuLinks = mobileMenu.querySelectorAll('a');

// --- Mobile Menu Toggle ---
function toggleMobileMenu() {
    if (mobileMenu.classList.contains('max-h-0')) {
        // Open menu: set a height that covers the content (e.g., max-h-screen)
        mobileMenu.classList.remove('max-h-0', 'p-0');
        mobileMenu.classList.add('max-h-screen', 'p-0');
    } else {
        // Close menu: reset to max-h-0 (p-0 is added back for padding transition)
        mobileMenu.classList.remove('max-h-screen');
        mobileMenu.classList.add('max-h-0');
        // The p-0 will be added back after the transition completes for smooth collapse
    }
}

// --- Cart Sidebar Toggle ---
function openCartSidebar() {
    cartSidebar.classList.remove('translate-x-full');
}

function closeCartSidebar() {
    cartSidebar.classList.add('translate-x-full');
}

// --- Event Listeners ---
menuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when a link is clicked
allMobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Delay the close slightly to allow navigation
        setTimeout(toggleMobileMenu, 100);
    });
});

// Open cart sidebar with the desktop and mobile cart buttons
cartBtnDesktop.addEventListener('click', openCartSidebar);
cartBtnMobile.addEventListener('click', openCartSidebar);

// Close cart sidebar with the close button
cartCloseBtn.addEventListener('click', closeCartSidebar);

// Optional: Close sidebar when clicking outside (on the main content area)
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = cartSidebar.contains(event.target);
    const isCartButton = event.target.closest('#cart-btn-desktop') || event.target.closest('#cart-btn-mobile');
    const isMenuButton = event.target.closest('#menu-btn');

    if (!isClickInsideSidebar && !isCartButton && !isMenuButton && !cartSidebar.classList.contains('translate-x-full')) {
        // Only close if the sidebar is open and the click isn't on the buttons
        closeCartSidebar();
    }
});