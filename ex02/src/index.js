class Book {
    constructor(title) {
        this.book = title;
    }
    get title() {
        return this.book;
    }
    set title(newTitle) {
        this.book = newTitle;    
    }
}

const littlePrince = new Book("The Little Prince");
console.log(littlePrince.title);
littlePrince.title = "Le Petit Prince";
console.log(littlePrince.title);

module.exports = Book;