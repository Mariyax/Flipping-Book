// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.style.display = 'block'; // Show Chapter 1
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.style.display = 'block'; // Show The End
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.style.display = 'block'; // Show Mesu AI
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.style.display = 'none';
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.style.display = 'none';
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.style.display = 'none';
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }

        currentLocation--;
    }
}

// Initial call to update pages
goNextPage();
