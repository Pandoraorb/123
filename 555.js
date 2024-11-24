document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector(".main-container");
    mainContainer.style.opacity = 0;
    setTimeout(() => {
        mainContainer.style.transition = "opacity 1.5s ease-in-out";
        mainContainer.style.opacity = 1;
    }, 100);
});

const revealElements = document.querySelectorAll(".section-title, .book, .genre-tags .tag");

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add("reveal");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Hover animations for books and tags
const books = document.querySelectorAll(".book");
books.forEach(book => {
    book.addEventListener("mouseenter", () => {
        book.classList.add("hover-effect");
    });
    book.addEventListener("mouseleave", () => {
        book.classList.remove("hover-effect");
    });
});

const genreTags = document.querySelectorAll(".tag");
genreTags.forEach(tag => {
    tag.addEventListener("mouseenter", () => {
        tag.classList.add("tag-hover");
    });
    tag.addEventListener("mouseleave", () => {
        tag.classList.remove("tag-hover");
    });
});

const searchInput = document.getElementById("searchInput");
const bookList = document.getElementById("bookList");
const booksArray = Array.from(bookList.getElementsByClassName("book"));

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    booksArray.forEach(book => {
        const title = book.getAttribute("data-title").toLowerCase();
        const author = book.getAttribute("data-author").toLowerCase();

        if (title.includes(searchValue) || author.includes(searchValue)) {
            book.style.display = "flex"; // Show matching book
        } else {
            book.style.display = "none"; // Hide non-matching book
        }
    });
});
