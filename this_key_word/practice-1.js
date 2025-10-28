let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    user : [],
    init : function(){
        form.addEventListener("submit", this.submitform.bind(this));
    },
    submitform : function(dets){
        dets.preventDefault();
        this.adduser();
    },
    adduser : function(){
        this.user.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value
        });
        form.reset();
        this.renderUI();
    },

    renderUI : function(){
         
        const cardsContainer = document.querySelector(".cards");
        cardsContainer.innerHTML = ""; 

        this.user.forEach(function(user){
        // Create card container
        let card = document.createElement("div");
        card.classList.add("card");

        // Create image
        let img = document.createElement("img");
        img.src = user.photo;
        img.alt = "User Photo";

        // Create name
        let name = document.createElement("h3");
        name.textContent = user.username;

        // Create role
        let role = document.createElement("p");
        role.classList.add("role");
        role.textContent = user.role;

        // Create bio
        let bio = document.createElement("p");
        bio.classList.add("bio");
        bio.textContent = user.bio;

        // Append all to card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(bio);

        // Append card to main container
        document.querySelector(".cards").appendChild(card);
        })
        

    },
    removeuser : function(){},
}
userManager.init();