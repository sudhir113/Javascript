var book ={
    author :'sudhir',
    showbook:function(){
        return author;
    }
};

var x=book.author();

console.log('ddd',x);


console.log(book.showbook());

