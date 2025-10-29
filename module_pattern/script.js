let Bank = (function(){
    let bankbalance = 12000;

    function checkbalance(){
        console.log(bankbalance);
    }

    function setbalance(val){
        bankbalance = val;
        console.log("your account is updated")
    }

    function withdraw(val){
        if(val <= bankbalance){
            bankbalance -= val;
            console.log("Successful...")
        }
    }

    return{
        checkbalance,
        setbalance,
        withdraw
    }
})();

