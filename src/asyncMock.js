const products = [
     {
        id: '1',
        name: 'Capsula dolce gusto capuccino',
        price: '310',
        category: 'Cafe',
        img: 'https://shop.nestle.com.uy/collections/capsulas-dolce-gusto/products/dolcegusto-cappuccino#images',
        stock: 30,
        description: 'Descripcion cafe'
     },
     {
        id: '2',
        name: 'Fernet Branca',
        price: '449',
        category: 'Alcohol',
        img: 'https://www.distribuidorabebidas.com.uy/producto/licor-fernet-branca-700-cc/',
        stock: 30,
        description: 'Descripcion Fernet'
     },
     {
        id: '3',
        name: 'Balde pico dulce',
        price: '310',
        category: 'Golosinas',
        img: 'https://www.elgoloso.com.uy/catalogo/golosinas/caramelos-chicles-y-chupetines/chupetines-pico-dulce-chup114/',
        stock: 30,
        description: 'Descripcion Pico Dulce'
     }
]

export const getProducts = () => {
    return new Promise (() => {
        setTimeout((resolve, reject) => {
            resolve(products)
        }, 1500)
    })
} 

export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}