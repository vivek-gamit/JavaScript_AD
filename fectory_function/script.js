function CreateProduct(name,price){
    let stock = 20;

    return{
        name,
        price,

        CheckStock(){
            console.log(`${stock} is avalable`)
        },
        Buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`${qty} is booked - only ${stock} are remain`);
            }
        },
        refill(qty){
            stock += qty;
            console.log(`${qty} are added - ${stock} new stock`);
        }
    }
}

let iphone = CreateProduct("apple" , 110000);
iphone.Buy(13);