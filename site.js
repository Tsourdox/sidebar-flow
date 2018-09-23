var slideshowIndex = 0;

function initSite() {
    initSidebar(); /* ref to sidebarController function */
    startBackgroundImageSlideshow();
}

function startBackgroundImageSlideshow() {
    var slideshowContainer = document.querySelector(".background-slideshow");
    
    setInterval(function() {
        slideshowContainer.children[slideshowIndex].classList.remove("show");
        slideshowIndex = (slideshowIndex + 1) % slideshowContainer.children.length;
        slideshowContainer.children[slideshowIndex].classList.add("show");
    }, 8000);
}

function mobileMenuButtonClicked() {
    openSidebar(); /* ref to sidebarController function */
}




// todo: make sure that chilren won't be picked.
/** Using recursion to find parent node  */
function findParentNode(node, selector) {
    /* Base case 1  - nothing was found and current node is the html node*/
    if (!node.parentElement) {
        return null;
    }

    /* Base case 2 - node was found */
    var nodeFound = node.parentElement.querySelector(selector);
    if (nodeFound) {
        return node;
    }

    /* Recurring call - not found so check parent */
    return findParentNode(node.parentElement, selector);
}