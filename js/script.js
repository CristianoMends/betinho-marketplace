const products = [
    {   id: 'chumbinho',
        image: 'img/products/chumbinho.jpeg',
        description: 'Chumbinho 5.5mm Espingarda De Pressão Carabina',
        price: 15.00,
        card: 1
    },
    {   id: 'carburador',
        image: 'img/products/carburador.jpeg',
        description: 'Carburador para motoserra Ms 170 Ms 180',
        price: 150.00,
        card: 1
    },
    {   id: 'esticador',
        image: 'img/products/estic.jpeg',
        description: 'Esticador para corrente de motoserra',
        price: 25.00,
        card: 1

    },
    {   id: 'sabre',
        image: 'img/products/sabre.webp', 
        description: 'sabre para motoserra rossel Ms 170',
        price: 95.00,
        card: 1

    },
    {   id: 'lima',
        image: 'img/products/lima.webp',
        description: 'Lima Para Amolar Afiar Motosserra Ms 170',
        price: 12.00,
        card: 1

    }
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
        
        const h2 = document.createElement('h4');
        h2.className = 'card';
        h2.innerHTML = `<i class="fa-regular fa-credit-card"></i> ${product.card}x R$ ${(product.price/product.card).toFixed(2).replace('.',',')} no Cartão`;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.className = 'price';
        price.innerHTML = `<span style="font-size: small;">R$:</span> ${product.price.toFixed(2).replace('.',',')}`;

        const button = document.createElement('button');
        button.textContent = 'Consultar o Vendedor';
        button.addEventListener('click',function(){

            var numeroTelefone = "558894748694";
            var mensagemPredefinida = "Olá, gostaria de mais informações sobre o produto: " + product.description;
            var mensagemCodificada = encodeURIComponent(mensagemPredefinida);
            var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=" + mensagemCodificada;

            window.open(linkWhatsApp, '_blank');
        })

        productInfo.appendChild(description);
        productInfo.appendChild(price);
        productInfo.appendChild(h2);
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

