/**
 * Controller file for the sidebar menu view (html+css file).
 * 
*/
var sidebarElement;

function initSidebar() {
    loadSidebarElement();
    addHoverEventListeners();
    addClickOutsideSidebarEventListener();
}

function loadSidebarElement() {
    sidebarElement = document.querySelector(".flow-sidebar");
}

function addClickOutsideSidebarEventListener() {
    document.addEventListener("click", function(event) {
        if (!findParentNode(event.target, ".flow-sidebar")) {
            collapseSidebar();
        }
    });
}

function addHoverEventListeners() {
    sidebarElement.addEventListener('mouseenter', onMouseEnter);
    sidebarElement.addEventListener('mouseleave', onMouseLeave);
}

function onMouseEnter() {
    openSidebar();
}
function onMouseLeave() {
    collapseSidebar();
}

function openSidebar() {
    sidebarElement.classList.add("open");
}
function collapseSidebar() {
    sidebarElement.classList.remove("open");
}

function onMenuItemClicked(event) {
    var allMenuItems = sidebarElement.querySelectorAll("li");
    var clickedMenuItem = findParentNode(event.target, 'li');

    for (var index = 0; index < allMenuItems.length; index++) {
        if (allMenuItems[index] === clickedMenuItem) {
            allMenuItems[index].classList.add("selected");
        }
        else if (allMenuItems[index].classList.contains("selected")) {
            allMenuItems[index].classList.remove("selected");
        }
    }
    
    collapseSidebar();
}