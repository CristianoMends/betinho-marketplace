
document.addEventListener('DOMContentLoaded', function () {
    // Simulação de dados do catálogo
    const products = [
        { id: 'chumbinho', image: '../img/chumbinho.jpeg', name: 'Chumbinho Carabina de pressão 5.5', description: 'Chumbinho 5.5mm Espingarda De Pressão Carabina', price: 'R$ 19,99' },
        { id: 'carburador', image: '../img/carburador.jpeg', name: 'Carburador para motoserra', description: 'Carburador para motoserra Ms 170 Ms 180', price: 'R$ 29,99' },
        { id: 'esticador', image: '../img/esticador.jpeg', name: 'Esticador para corrente', description: 'Esticador para corrente de motoserra', price: 'R$ 39,99' }
    ];

    const productSection = document.getElementById('productSection');

    // Preencher a seção de produtos
    products.forEach(product => {
        const article = document.createElement('article');
        article.id = product.id;

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const productInfo = document.createElement('div');
        const h2 = document.createElement('h3');
        h2.textContent = product.name;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.textContent = `Preço: ${product.price}`;

        const button = document.createElement('button');
        button.textContent = 'Consultar o Vendedor';

        productInfo.appendChild(h2);
        productInfo.appendChild(description);
        productInfo.appendChild(price);
        productInfo.appendChild(button);

        article.appendChild(img);
        article.appendChild(productInfo);

        productSection.appendChild(article);
    });
});
