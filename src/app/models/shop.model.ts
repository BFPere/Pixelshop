export class Shop {

    shopItems: any;
    
    constructor() {
        this.shopItems = [
            {
                title: 'Curso Wordpress',
                desc: 'Aprende Wordpress desde 0 con Pere Bayascas',
                picture: 'assets/img/wordpress.jpg',
                price: 160
            },
            {
                title: 'Curso Frontend',
                desc: 'Aprende front end desde 0 con Pere Bayascas',
                picture: 'assets/img/frontend.jpg',
                price: 220
            },
            {
                title: 'Curso Fullstack',
                desc: 'Aprende Fullstack desde 0 con Pere Bayascas',
                picture: 'assets/img/fullstack.jpg',
                price: 420
            }
        ];
    }

}
