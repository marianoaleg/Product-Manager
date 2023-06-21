class ProductManager{
    constructor(){
        this.products=[];
    }
    addProduct(title,price,thumbnail,code,stock){
        let autoID = this.products.length + 1 ;
        const newProduct ={
            title: title,
            price: price,          
            thumbnail: thumbnail,            
            code: code,
            stock: stock, 
            id: autoID,             
        } 
        const controlManager = this.products.some(e=> e.code === code);
        controlManager ? console.log("El producto ya existe") :
        (title || price || thumbnail || code || stock) ? this.products.push(newProduct):console.log("Campos incompletos");

    }
    getProducts(){
        return this.products;
    }
    getProductById(id){
        let product = this.products.find(e=> e.id == id)
        if(product) return product; 
        return console.log("El producto no existe");
    }   
}

const producto = new ProductManager();
producto.addProduct("Jeringa 5ml.", 50 , "sin imagen", "asd51", 100);
producto.addProduct("Jeringa 10ml.", 50 , "sin imagen", "asd52", 100);
producto.addProduct("Jeringa 20ml.", 50 , "sin imagen", "asd53", 100);
producto.getProductById(1);
producto.getProducts();