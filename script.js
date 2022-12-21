const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShop = document.querySelector('.navbar-shopping-cart');
const shoppingCartProduc = document.querySelector('#shoppingCartProduc');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#detailProduct');
const btnDetailProductClose = document.querySelector('.product-detail-close');
const arrAllViews = [shoppingCartProduc, productDetailContainer, mobileMenu, desktopMenu];

navEmail.addEventListener('click', toggleDesktopMenu);
btnHamburger.addEventListener('click', toggleMobileMenu);
navbarShop.addEventListener('click', toggleshoppingCartProducCarrito);
btnDetailProductClose.addEventListener('click', detailProduct);

function toggleDesktopMenu(){
    closeViews(desktopMenu, arrAllViews);
}

function toggleMobileMenu(){
    closeViews(mobileMenu, arrAllViews);
}

function toggleshoppingCartProducCarrito(){
    closeViews(shoppingCartProduc, arrAllViews);
}

function detailProduct(){
    closeViews(productDetailContainer,arrAllViews);
}

function openDetailProduct(){
    const isShoppingCartProducClosed = shoppingCartProduc.classList.contains('inactive');
    if (!isShoppingCartProducClosed){
        shoppingCartProduc.classList.toggle('inactive');
    }
    productDetailContainer.classList.remove('inactive');
}


function closeViews(element , arrViews){
    const isTheElementOpen = element.classList.contains('inactive');
    if(!isTheElementOpen){
        element.classList.add('inactive');
    }
    else{
        for (let views of arrViews){
            (views==element)? views.classList.remove('inactive'): views.classList.add('inactive');   
        }
    }
    
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Monitor',
    price: '650',
    image: "https://www.lg.com/mx/images/monitores/MD06155039/gallery/D-02.jpg"
});
productList.push({
    name: 'Mouse',
    price: '215',
    image: "https://cf.shopee.com.mx/file/c4c6c3b60a93ef50ca5b184693b5e446"
});

// <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>

function renderProduct(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image );
        imgProduct.addEventListener('click', openDetailProduct )
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const divP = document.createElement('div');
        const pPrecio = document.createElement('p');
        pPrecio.innerText = '$ ' + product.price;
        const pProduct = document.createElement('p');
        pProduct.innerText = product.name;
    
        divP.append(pPrecio, pProduct);
    
        const figure = document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
        //Se mete del hijo al padre
        figure.appendChild(imgFigure);
    
        productInfo.append(divP, figure);
    
        productCard.append(imgProduct, productInfo);
        
        cardsContainer.appendChild(productCard);
    
    }
}

renderProduct(productList);

