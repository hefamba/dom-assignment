var headerId = document.getElementById("page-header");
console.log(headerId);
headerId.classList.remove("bg-dark");
headerId.classList.add("bg-success");
headerId.innerHTML = '<h1>New DOM Layout</h1>';
headerId.style.textAlign = 'center'



var mainHeading = document.getElementById("main-heading");

var paraOne = document.getElementById("para1");
paraOne.innerText = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."

var paraTwo = document.getElementById("para2");
paraTwo.innerText = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

var buttonOne = document.getElementById("btn");
buttonOne.addEventListener("click", () => {
    var paraFour = document.getElementById("para4");
    paraFour.innerText = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
});



var divRed = document.getElementById("red");
console.log(divRed);
divRed.classList.remove('bg-white');
divRed.classList.add('bg-danger');

var divBlue = document.getElementById("blue");
divBlue.classList.remove('bg-white');
divBlue.classList.add('bg-primary')




var divGreen = document.getElementById("green");
divGreen.classList.remove('bg-white')
divGreen.classList.add('bg-success')


var divBlack = document.getElementById("black");
divBlack.classList.remove('bg-white');
divBlack.classList.add('bg-dark');

var divYellow = document.getElementById("yellow");
divYellow.classList.remove('bg-white');
divYellow.classList.add('bg-warning')
