function getUser(){
    document.querySelector(".card").innerHTML = " ";
    fetch("https://randomuser.me/api/?results=3")
.then((raw) => raw.json())
.then((data) => {

    data.results.forEach(function(user) {
        // Create main card div
        let card = document.createElement("div");
        card.className = "bg-[#1e293b] p-6 rounded-lg shadow-lg flex items-center gap-4 w-80";

        // Create image
        let img = document.createElement("img");
        img.src = user.picture.large;
        img.alt = "Profile";
        img.className = "w-16 h-16 rounded-full object-cover";

        // Create inner div
        let innerDiv = document.createElement("div");

        // Create name
        let name = document.createElement("h2");
        name.className = "text-white font-semibold text-lg";
        name.textContent = user.name.first + " " + user.name.last;

        // Create email
        let email = document.createElement("p");
        email.className = "text-gray-400 text-sm";
        email.textContent = user.email;

        // Create status badge
        let status = document.createElement("span");
        status.className = "inline-block mt-2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full";
        status.textContent = "Active";

        // Append all inner elements
        innerDiv.appendChild(name);
        innerDiv.appendChild(email);
        innerDiv.appendChild(status);

        card.appendChild(img);
        card.appendChild(innerDiv);

        // Finally append the card to body (or another container)
        document.querySelector(".card").appendChild(card);
    });
})
}

document.querySelector(".refresh").addEventListener("click", function() {
    getUser();
})