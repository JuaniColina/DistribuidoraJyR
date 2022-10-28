const products = [
     {
        id: '1',
        name: 'Capsula dolce gusto capuccino',
        price: '310',
        category: 'Cafe',
        img: 'https://cdn.shopify.com/s/files/1/0574/7585/8640/products/NDG_Cappu_2400x.jpg?v=1655744971',
        stock: 30,
        description: 'Descripcion cafe'
     },
     {
        id: '2',
        name: 'Fernet Branca',
        price: '449',
        category: 'Alcohol',
        img: 'https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2018/01/fern-branca-1-510x510.jpg',
        stock: 30,
        description: 'Descripcion Fernet'
     },
     {
        id: '3',
        name: 'Balde pico dulce',
        price: '310',
        category: 'Golosinas',
        img: 'https://cotillonfullexpress.com/images/contenidos/20200901215119_CHUPETIN%20PICO%20DULCE.jpg',
        stock: 30,
        description: 'Descripcion Pico Dulce'
     }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
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

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}