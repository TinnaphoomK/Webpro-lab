var app = new Vue({
    el: '#app',
    data: {
        shopName: 'Tinz Shop',
        products: [
            {
                title: "iPhone 11",
                brand: "Apple",
                price: 34900,
                is_favorite: false,
                image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                amount:0
            },
            {
                title: "Lumix GH5",
                brand: "Panasonic",
                price: 44900,
                is_favorite: false,
                image: 'https://images.unsplash.com/photo-1585459733441-9b415fed25b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80',
                amount:0
            },
            {
                title: "Vintage Model Car",
                brand: "Unknow",
                price: 990,
                is_favorite: false,
                image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                amount:0
            },
            {
                title: "Case for iPhone 11 Pro",
                brand: "Unknow",
                price: 590,
                is_favorite: false,
                image: 'https://images.unsplash.com/photo-1601593346740-925612772716?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                amount:0
            },
            {
                title: "Air freshener",
                brand: "Febreze",
                price: 120,
                is_favorite: false,
                image: 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                amount:0
            },
            {
                title: "Google Home",
                brand: "Google",
                price: 3290,
                is_favorite: false,
                image: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                amount:0
            },
            {
                title: "VR Gaming",
                brand: "Unknow",
                price: 22490,
                is_favorite: false,
                image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=996&q=80',
                amount:0
            },
        ],
        cart: [],
        show_modal: false
    },
    methods:{
        addsum(product){
            let checking = false
            for(let i = 0 ; i < this.cart.length ; i++){
                if(this.cart[i].title === product.title){
                    this.cart[i].amount += 1
                    checking = true
                }
            }
            if(!checking){
                product.amount += 1
                this.cart.push(product)
            }
        }
    }
})