function createToaster(config){
    return function(str){
        let div = document.createElement("div")
        div.textContent = str;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300`
        document.querySelector(".parent").appendChild(div);
         

        if(config.positionX !== "left" || config.positionY !== "top"){
            document.querySelector(".parent").className += ` ${
             config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
        }
        setTimeout(()=>{
            document.querySelector(".parent").removeChild(div);
        },config.duration*1000)
    }
}

let toaster = createToaster({
    positionX : "right",
    positionY : "bottom",
    theme : "light",
    duration : 2,
});

toaster("Download Done");
setTimeout(()=>{
    toaster("hello vivek");
},2000)

