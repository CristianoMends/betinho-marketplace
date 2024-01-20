
document.addEventListener('DOMContentLoaded', function () {
    // Simulação de dados do catálogo
    const products = [
        { id: 'chumbinho', image: 'img/chumbinho.jpeg', name: 'Chumbinho para Carabina de pressão', description: 'Chumbinho 5.5mm Espingarda De Pressão Carabina', price: '15,00' },
        { id: 'carburador', image: 'img/carburador.jpeg', name: 'Carburador para motoserra', description: 'Carburador para motoserra Ms 170 Ms 180', price: '150,00' },
        { id: 'esticador', image: 'img/esticador.jpeg', name: 'Esticador para corrente', description: 'Esticador para corrente de motoserra', price: '25,00' }
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
        price.className = 'price';
        price.textContent = `R$: ${product.price}`;

        const button = document.createElement('button');
        button.textContent = 'Consultar o Vendedor';
        button.addEventListener('click',function(){
            var numeroTelefone = "558894748694";

            var mensagemPredefinida = "Olá, gostaria de mais informações sobre o produto: " + product.name;

            var mensagemCodificada = encodeURIComponent(mensagemPredefinida);

            var linkWhatsAppWeb = "https://web.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + mensagemCodificada;

            window.open(linkWhatsAppWeb, '_blank');
        })

        productInfo.appendChild(h2);
        productInfo.appendChild(price);
        productInfo.appendChild(description);
        productInfo.appendChild(button);

        article.appendChild(img);
        article.appendChild(productInfo);

        productSection.appendChild(article);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.querySelector('.galeria');
    let contadorImagem = 1;

    setInterval(() => {
        galeria.style.transform = `translateX(${-contadorImagem * 100}%)`;
        contadorImagem++;

        if (contadorImagem === document.querySelectorAll('.galeria img').length) {
            contadorImagem = 0;
        }
    }, 3000);
});
