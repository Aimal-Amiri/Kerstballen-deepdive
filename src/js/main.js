const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const cartBtnDesktop = document.getElementById('cart-btn-desktop');
const cartBtnMobile = document.getElementById('cart-btn-mobile');
const cartSidebar = document.getElementById('cart-sidebar');
const cartCloseBtn = document.getElementById('cart-close');
const allMobileMenuLinks = mobileMenu.querySelectorAll('a');

function toggleMobileMenu() {
    if (mobileMenu.classList.contains('max-h-0')) {
        mobileMenu.classList.remove('max-h-0', 'p-0');
        mobileMenu.classList.add('max-h-screen', 'p-0');
    } else {
        mobileMenu.classList.remove('max-h-screen');
        mobileMenu.classList.add('max-h-0');
    }
}

function openCartSidebar() {
    cartSidebar.classList.remove('translate-x-full');
}

function closeCartSidebar() {
    cartSidebar.classList.add('translate-x-full');
}

menuBtn.addEventListener('click', toggleMobileMenu);

allMobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(toggleMobileMenu, 100);
    });
});

cartBtnDesktop.addEventListener('click', openCartSidebar);
cartBtnMobile.addEventListener('click', openCartSidebar);

cartCloseBtn.addEventListener('click', closeCartSidebar);

document.addEventListener('click', (event) => {
    const isClickInsideSidebar = cartSidebar.contains(event.target);
    const isCartButton = event.target.closest('#cart-btn-desktop') || event.target.closest('#cart-btn-mobile');
    const isMenuButton = event.target.closest('#menu-btn');

    if (!isClickInsideSidebar && !isCartButton && !isMenuButton && !cartSidebar.classList.contains('translate-x-full')) {
        closeCartSidebar();
    }
});