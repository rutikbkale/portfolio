function Menu(e) {
    let list = document.querySelector("ul");
    e.name === "menu"
        ? ((e.name = "close"),
            list.classList.add("top-[80px]"),
            list.classList.add("opacity-100"))
        : ((e.name = "menu"),
            list.classList.remove("top-[80px]"),
            list.classList.remove("opacity-100"));
}
function opentab(tabName) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tab-contents');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.add('hidden');
    }
    // Show the selected tab content
    document.getElementById(tabName).classList.remove('hidden');
}