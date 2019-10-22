function Book () {
    this.author = "James Joyce";
    this.getAuthor = function() {
        return this.author;
    };
}
var book = new Book();
alert(book.author);       // => James Joyce   (public property)
alert(book.getAuthor());  // => James Joyce   (public method)