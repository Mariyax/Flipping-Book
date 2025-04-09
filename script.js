// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

let currentPage = 1;
let numOfPages = 3; // Only 3 pages (Chapter 1, The End, Mesu AI)

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

function goNextPage() {
    if (currentPage < numOfPages) {
        currentPage++;
        updatePages();
    }
}

function goPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePages();
    }
}

// Function to update the page display
function updatePages() {
    // Hide all pages initially
    paper1.style.display = 'none';
    paper2.style.display = 'none';
    paper3.style.display = 'none';

    // Show the current page
    if (currentPage === 1) {
        paper1.style.display = 'block'; // Show Chapter 1
    } else if (currentPage === 2) {
        paper2.style.display = 'block'; // Show The End
    } else if (currentPage === 3) {
        paper3.style.display = 'block'; // Show Mesu AI
    }
}

// Initial call to update pages
updatePages();
