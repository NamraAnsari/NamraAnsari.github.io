function displayDropdown(clickedId) {
    closeDropdowns();
    document.getElementById(clickedId + "-submenu").classList.toggle("show");
}

function closeDropdowns() {
    var dropdowns = document.getElementsByClassName("link-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-menu')) {
        closeDropdowns();
    }
}