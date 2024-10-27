function searchBooks() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const bookItems = document.querySelectorAll(".book-item");

    bookItems.forEach(book => {
        const title = book.querySelector("h3").innerText.toLowerCase();
        const isVisible = title.includes(input);

        book.style.display = isVisible ? "block" : "none";
        book.style.opacity = isVisible ? "1" : "0";
        book.style.transform = isVisible ? "translateY(0)" : "translateY(20px)";
    });
}

function changeLanguage() {
    const selectedLanguage = document.getElementById("languageSwitcher").value;
    alert("Language changed to: " + selectedLanguage);
}
