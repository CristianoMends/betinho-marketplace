const products = [
    { id: 'chumbinho', image: 'img/products/chumbinho.jpeg', name: 'Chumbinho para Carabina de pressão', description: 'Chumbinho 5.5mm Espingarda De Pressão Carabina', price: '15,00' },
    { id: 'carburador', image: 'img/products/carburador.jpeg', name: 'Carburador para motoserra', description: 'Carburador para motoserra Ms 170 Ms 180', price: '150,00' },
    { id: 'esticador', image: 'img/products/esticador.jpeg', name: 'Esticador para corrente', description: 'Esticador para corrente de motoserra', price: '25,00' },
    { id: 'sabre', image: 'img/products/sabre.webp', name: 'Sabre de motoserra', description: 'sabre para motoserra rossel Ms 170', price: '95,00' },
    { id: 'lima', image: 'img/products/lima.webp', name: 'Lima Para Motosserra', description: 'Lima Para Amolar Afiar Motosserra Ms 170', price: '12,00' }
];

document.addEventListener('DOMContentLoaded', function () {
    
   

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
            var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=" + mensagemCodificada;

            window.open(linkWhatsApp, '_blank');
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

function search(){
    const dadosString = document.getElementById('input').value.toString();
    for(const p of products){
        if (p.description.toLowerCase().includes(dadosString.toLowerCase()) && dadosString != '' && dadosString != ' ') {
            document.getElementById(p.id).scrollIntoView({ behavior: 'smooth' });
            break;            
        } else {
            
        }
    }
}
const input = document.getElementById('input');
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        search()
    }
});

const btnToHome = document.getElementById('toHome');
btnToHome.addEventListener('click',function(){
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
})

