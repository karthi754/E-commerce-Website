document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll(".banner");
    let currentBannerIndex = 0;

    function showNextBanner() {
        banners[currentBannerIndex].classList.remove("active");
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        banners[currentBannerIndex].classList.add("active");
    }

  
    setInterval(showNextBanner, 2000);
});
var Menuitems = document.getElementById("Menuitems");

Menuitems.style.maxHeight="0px";

function menutoggle(){
    if(Menuitems.style.maxHeight == "0px"){
        Menuitems.style.maxHeight = "200px";
    }
    else{
        Menuitems.style.maxHeight="0px";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const sidebar = document.querySelector(".sidebar");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // You can add logic here to add the clicked product to the cart
            // For simplicity, let's just open the sidebar for now
            sidebar.style.width = "250px";
        });
    });

    // Close the sidebar when the close button is clicked
    document.querySelector(".close-btn").addEventListener("click", function () {
        sidebar.style.width = "0";
    });
});
