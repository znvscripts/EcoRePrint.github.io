function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display === "none" ? dropdownContent.style.display = "block" : dropdownContent.style.display = "none";
}