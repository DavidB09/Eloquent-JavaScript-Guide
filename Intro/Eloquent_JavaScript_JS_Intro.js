//MAIN TITLE AND HEADER
// Create the div for the main header
var mainHeaderDiv = document.createElement("div"); 
mainHeaderDiv.id = "main-header-div";  
document.body.append(mainHeaderDiv); 

// Create the header for the title
var mainHeader = document.createElement("h1"); 
mainHeader.id = "mainHeader";
mainHeader.innerHTML = "Welcome to the (Unofficial) Exercise Guide of Eloquent JavaScript";
document.getElementById("main-header-div").append(mainHeader); 

// Create the header for the creator's name 
var secondHeader = document.createElement("h2");
secondHeader.id = "secondHeader";
secondHeader.innerHTML = "Created by David Brunner (A Rookie JavaScript Pupil)"; 
document.getElementById("main-header-div").append(secondHeader); 


//ELOQUENT JAVASCRIPT LINKS
// Create a div for the Eloquent JavaScript links
var resources = document.createElement("div"); 
resources.id = "resources-div";
document.body.append(resources); 

var bookLinkDiv = document.createElement("div"); 
bookLinkDiv.id = "book-links-div";
document.getElementById("resources-div").append(bookLinkDiv); 

//Create an image of the book cover
var bookCoverImage = document.createElement("img");
bookCoverImage.id = "book-cover-image";
bookCoverImage.src = "../Intro/Book_Cover.jpg"; 
bookCoverImage.alt = "Eloquent JavaScript Cover"; 
document.getElementById("book-links-div").append(bookCoverImage); 

//Create a div
var linksDiv = document.createElement("div");
linksDiv.id = "links";
document.getElementById("book-links-div").append(linksDiv); 

//Create a div for first link
var firstLinkDiv = document.createElement("div"); 
firstLinkDiv.id = "first-link-div"; 
document.getElementById("links").append(firstLinkDiv); 

// Create a p for the Eloquent JavaScript website link
var link1 = document.createElement("p"); 
link1.id = "link1"; 
link1.innerText = "The entire book is available online for free: "; 
document.getElementById("first-link-div").append(link1); 

// Create a href link for the Eloquent JavaScript website
var link1Element = document.createElement("a"); 
link1Element.innerText = "Eloquent JavaScript Website"; 
link1Element.href = "https://eloquentjavascript.net/index.html"; 
link1Element.alt = "Eloquent JavaScript Website"; 
link1Element.target = "_blank"; 
document.getElementById("first-link-div").append(link1Element); 

// Create a div for the second link
var secondLinkDiv = document.createElement("div");
secondLinkDiv.id = "second-link-div"; 
document.getElementById("links").append(secondLinkDiv); 

// Create a p for the Amazon link to Eloquent JavaScript
var links2 = document.createElement("p"); 
links2.id = "link2"; 
links2.innerText = "The entire book is also available for purchase: " 
document.getElementById("second-link-div").append(links2); 

// Create a href link for Amazon to purchase Eloquent JavaScript
var link2Element = document.createElement("a");
link2Element.innerText = "Amazon"; 
link2Element.href = "https://www.amazon.com/gp/product/1593279507/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1593279507&linkCode=as2&tag=marijhaver-20&linkId=d8642c0457954f03e27c02b0034d0d60"; 
link2Element.alt = "Amazon"; 
link2Element.target = "_blank"; 
document.getElementById("second-link-div").append(link2Element); 


//NAVBAR
//Create a div element for the navbar
var navbarDiv = document.createElement("div");
navbarDiv.id = "navbar-div"; 
document.body.append(navbarDiv); 

//Create a div element for 3rd Ed.
var navbarDiv3 = document.createElement("div"); 
navbarDiv3.id = "navbar-div-3rd-Ed"; 
navbarDiv.append(navbarDiv3); 

//Create a header for 3rd Ed. 
var header3rdEd = document.createElement("h3"); 
header3rdEd.id = "header-3rd-Ed"; 
header3rdEd.innerHTML = "3rd Edition"; 
document.getElementById("navbar-div-3rd-Ed").append(header3rdEd); 

// Create a navbar for 3rd Ed. 
var navbar3 = document.createElement("nav"); 
navbar3.id = "navbar-3rd-Ed";
document.getElementById("navbar-div-3rd-Ed").append(navbar3); 

//Create unorderedList
var unorderedList3 = document.createElement("ul"); 

//Create link for first Chapter
var page31 = document.createElement("li"); 
var page31Link = document.createElement("a"); 
page31Link.innerText = "Chapter 1 (Part 1: Language)"; 
page31Link.href = "../Chap1 - Values, Types, and Operators/Eloquent_JavaScript_HTML_Chap1.html"; 
page31Link.title = "Chapter 1";
page31.appendChild(page31Link); 
unorderedList3.append(page31); 

//Create link for second Chapter
//var page32 = document.createElement("li");
//var page32Link = document.createElement("a"); 

// Add links to the unordered list
navbar3.append(unorderedList3); 


// CSS

var styles = `
    html {
        font-size: 62.5%;
        overflow-y: scroll; 
    }    

    body {
        margin: 0;
        font-size: 2rem;
        font-family: Georgia, 'Nimbus Roman No9 L', 'Century Schoolbook L', serif;
    }

    #main-header-div { 
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 0 auto;
        padding: 15rem 10rem 10rem 10rem;
        background-color: #f8d410;
    }

    #resources-div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10rem;
    }

    #book-links-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #book-cover-image {
        height: 100%;
        width: 100%;
    }

    #links {
        display: none;
        position: relative;
    }

    #first-link-div {
        position: absolute;
        text-align: center;
        transform: translate(-50%, -300%);
        width: 30rem; 
        margin-bottom: 1rem;
        padding: 2rem;
        background-color: rgb(0,0,0); 
        background-color: rgba(0,0,0, 0.8);
        color: white;
        border: 0.5rem solid white;
    }

    #second-link-div {
        position: absolute;
        text-align: center;
        transform: translate(-50%, -200%);
        width: 30rem; 
        margin-top: 1rem;
        padding: 2rem;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0, 0.8);
        color: white;
        border: 0.5rem solid white;
    }

    #links a{
        color: #ac77f2; 
    }

    #book-cover-image:hover + #links{
        display: flex;
        flex-direction: column;
    }

    #book-links-div:hover #book-cover-image{
        filter: blur(8px); 
    }

    #navbar-div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 8rem;
    }

    #navbar-div-3rd-Ed {
        padding: 5rem;
        transition: background-color 0.3s ease-out;
    }

    #navbar-div-3rd-Ed:hover {
        background-color: #f8d410;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: purple; 
    }

`
var styleSheet = document.createElement("style"); 
styleSheet.type = "text/css";
styleSheet.innerText = styles; 
document.head.appendChild(styleSheet); 
