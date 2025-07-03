const products = [
    { id: 1, title: "Product 1", description: "High-quality product with elegant design", price: 250, image: "photo/IMG_20240919_110035.jpg" },
    { id: 2, title: "Product 2", description: "Stylish and modern design", price: 230, image: "photo/IMG_20240919_204817.jpg" },
    { id: 3, title: "Product 3", description: "Perfect for all tastes", price: 350, image: "photo/IMG_E2520.JPG" },
    { id: 4, title: "Product 4", description: "Elegance and distinction", price: 250, image: "photo/IMG_20240919_205913.jpg" },
    { id: 5, title: "Product 5", description: "High quality at an affordable price", price: 150, image: "photo/IMG_20240919_205811.jpg" },
    { id: 6, title: "Product 6", description: "Unique and distinctive design", price: 400, image: "photo/IMG_E3435.JPG" },
    { id: 7, title: "Product 7", description: "Unmatched elegance", price: 500, image: "photo/IMG_E1321.JPG" },
    { id: 8, title: "Product 8", description: "Practical and stylish product", price: 300, image: "photo/IMG_0210.JPG" },
    { id: 9, title: "Product 9", description: "Modern design with excellent quality", price: 350, image: "photo/IMG-20240516-WA0004.jpg" },
    { id: 10, title: "Product 10", description: "Luxury product with distinctive design", price: 500, image: "photo/IMG_2001.JPG" },
    { id: 11, title: "Product 11", description: "Elegance and distinction at a reasonable price", price: 400, image: "photo/IMG_2033.JPG" },
    { id: 12, title: "Product 12", description: "Stylish and affordable", price: 280, image: "photo/IMG_2113.JPG" },
    { id: 13, title: "Product 13", description: "Premium quality product", price: 350, image: "photo/IMG_0072.JPG" },
    { id: 14, title: "Product 14", description: "Modern and practical", price: 280, image: "photo/IMG_0187.JPG" },
    { id: 15, title: "Product 15", description: "Elegant and affordable", price: 250, image: "photo/IMG_20240920_005343.jpg" },
    { id: 16, title: "Product 16", description: "Simple yet stylish", price: 220, image: "photo/IMG_20240920_005402.jpg" },
    { id: 17, title: "Product 17", description: "High-quality and affordable", price: 250, image: "photo/IMG_20240920_005523.jpg" },
    { id: 18, title: "Product 18", description: "Modern design with great value", price: 250, image: "photo/IMG_20240920_005548.jpg" },
    { id: 19, title: "Product 19", description: "Luxury product with unique design", price: 450, image: "photo/a.jpg" },
    { id: 20, title: "Product 20", description: "Elegant and high-quality", price: 350, image: "photo/IMG-20240516-WA0001.jpg" },
    { id: 21, title: "Product 21", description: "Stylish and durable", price: 350, image: "photo/IMG-20240306-WA0010.jpg" },
    { id: 22, title: "Product 22", description: "Affordable and modern", price: 220, image: "photo/IMG_20240920_005415.jpg" },
    { id: 23, title: "Product 23", description: "Premium quality and design", price: 350, image: "photo/IMG_0069.JPG" },
    { id: 24, title: "Product 24", description: "Luxury product with great value", price: 500, image: "photo/IMG-20240306-WA0003.jpg" },
    { id: 25, title: "Product 25", description: "Elegant and stylish", price: 350, image: "photo/photo_1_2024-01-16_12-32-01.jpg" },
    { id: 26, title: "Product 26", description: "Modern and high-quality", price: 350, image: "photo/photo_6_2024-01-16_12-32-01.jpg" },
    { id: 27, title: "Product 27", description: "Affordable elegance", price: 300, image: "photo/IMG-20240516-WA0003.jpg" },
    { id: 28, title: "Product 28", description: "Stylish and durable", price: 350, image: "photo/IMG-20240516-WA0021.jpg" },
    { id: 29, title: "Product 29", description: "Simple and affordable", price: 220, image: "photo/photo_19_2024-01-16_12-23-25.jpg" },
    { id: 30, title: "Product 30", description: "Great value product", price: 200, image: "photo/photo_21_2024-01-16_12-23-25.jpg" },
    { id: 31, title: "Product 31", description: "Affordable and stylish", price: 150, image: "photo/WhatsApp Image 2024-05-16 at 00.13.12_9670204f.jpg" },
    { id: 32, title: "Product 32", description: "Premium quality design", price: 350, image: "photo/WhatsApp Image 2024-05-16 at 00.13.18_50babff6.jpg" },
    { id: 33, title: "Product 33", description: "Elegant and modern", price: 280, image: "photo/WhatsApp Image 2024-05-16 at 00.13.18_be4a7847.jpg" },
    { id: 34, title: "Product 34", description: "High-quality and stylish", price: 350, image: "photo/WhatsApp Image 2024-05-16 at 00.13.20_bb11f131.jpg" },
    { id: 35, title: "Product 35", description: "Affordable and practical", price: 200, image: "photo/IMG_20240920_001714.jpg" },
    { id: 36, title: "Product 36", description: "Simple and elegant", price: 200, image: "photo/IMG_20240920_002619.jpg" },
    { id: 37, title: "Product 37", description: "Modern and affordable", price: 200, image: "photo/IMG_20240920_002928.jpg" },
    { id: 38, title: "Product 38", description: "Luxury product with premium design", price: 500, image: "photo/WhatsApp Image 2025-01-24 at 14.40.34_bbd98cd1.jpg" },
    { id: 39, title: "Product 39", description: "Stylish and affordable", price: 220, image: "photo/IMG_20240920_001737.jpg" },
    { id: 40, title: "Product 40", description: "Elegant and high-quality", price: 350, image: "photo/IMG_20240920_002311.jpg" },
    { id: 41, title: "Product 41", description: "Modern and durable", price: 350, image: "photo/IMG_20240920_002338.jpg" },
    { id: 42, title: "Product 42", description: "Affordable and stylish", price: 200, image: "photo/IMG_20240920_002519.jpg" },
    { id: 43, title: "Product 43", description: "Simple and elegant", price: 220, image: "photo/IMG_2247.JPG" },
    { id: 44, title: "Product 44", description: "Great value product", price: 200, image: "photo/IMG_20240920_000900.jpg" },
    { id: 45, title: "Product 45", description: "Stylish and affordable", price: 240, image: "photo/IMG_20240920_000705.jpg" },
    { id: 46, title: "Product 46", description: "High-quality and modern", price: 250, image: "photo/IMG_20240920_000514.jpg" },
];

const productGrid = document.getElementById('product-grid');
const priceFilter = document.getElementById('price-filter');
const backToTopButton = document.getElementById('back-to-top');

// Render Products
function renderProducts(productsToRender) {
    productGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-price="${product.price}">
            <div class="product-image" style="background-image: url('${product.image}')" loading="lazy"></div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price} EGP</p>
                <a href="https://wa.me/+201222454754?text=I want to order ${product.title} for ${product.price} EGP" class="add-to-cart">Order Now</a>
            </div>
        </div>
    `).join('');
    animateProducts();
}

// Filter Products
priceFilter.addEventListener('change', () => {
    const filterValue = priceFilter.value;
    let filteredProducts = [];

    if (filterValue === 'all') {
        filteredProducts = products;
    } else if (filterValue === '0-300') {
        filteredProducts = products.filter(product => product.price <= 300);
    } else if (filterValue === '300-400') {
        filteredProducts = products.filter(product => product.price > 300 && product.price <= 400);
    } else if (filterValue === '400+') {
        filteredProducts = products.filter(product => product.price > 400);
    }

    renderProducts(filteredProducts);
});

// Animate Products on Scroll
function animateProducts() {
    const productCards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    productCards.forEach(card => observer.observe(card));
}

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initial Render
renderProducts(products);