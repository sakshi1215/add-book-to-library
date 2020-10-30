console.log("this is using ES6 classes");
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display 
{
    add(book) {
        console.log("adding");
        let tableBody = document.getElementById("tableBody");
        let uiString = ` <tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>
                        `
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

}

//event listener
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e)
{
    console.log("submitted");
    let name=document.getElementById("bookname").value;
    let author=document.getElementById("author").value;
    let type;

    let fiction=document.getElementById("fiction");
    let nf=document.getElementById("nf");
    let programming=document.getElementById("programming");

    if(fiction.checked)
    {
        type=fiction.value;
    }
    else if(nf.checked)
    {
        type=nf.value;
    }
    else if(programming.checked)
    {
        type=programming.value;
    }



    let book =new Book(name,author,type);
    console.log(book);

    let display=new Display();
    display.add(book);
    display.clear();
    e.preventDefault();
}