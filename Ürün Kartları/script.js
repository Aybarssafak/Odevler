// script.js

document.addEventListener('DOMContentLoaded', () => {
    const url = "http://localhost:3000/products";
    const productContainer = document.getElementById('ürün');
    const modal = document.getElementById('modal');
    const modalBaşlık = document.getElementById('modal-başlık');
    const modalİçerik = document.getElementById('modal-içerik');
    const modalFiyat = document.getElementById('modal-fiyat');
    const modalSatınal = document.getElementById('modal-satınal');
    const kapatButton = document.querySelector('.kapat-button');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const ürünkart = document.createElement('div');
                ürünkart.classList.add('ürün-card');
                ürünkart.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>${product.body.substring(0, 200)}...</p>
                    <h3>${product.fiyat}<h3>
                    <button>${product.satınal}</button>
                `;
                ürünkart.addEventListener('click', () => {
                    modalBaşlık.textContent = product.title;
                    modalİçerik.textContent = product.body;
                    modalFiyat.textContent = product.fiyat;
                    modalSatınal.textContent = product.satınal;
                    modal.style.display = 'block';
                });
                productContainer.appendChild(ürünkart);
            });
        })
        .catch(error => {
            console.error('Veri çekme hatası:', error);
            productContainer.innerHTML = ("eğer hata aldıysanız termale şunu yazın 'json-server --watch api.json'");
        });
        
    kapatButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
