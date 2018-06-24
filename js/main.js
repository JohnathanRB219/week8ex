// changing background color from blue in CSS to red i javascript
document.getElementById("low").style.backgroundColor = 'red';
// creating a new div in my body
var newDiv = document.createElement("div");
// giving newDiv an Id
newDiv.Id = "lower";
// creating h1 and adding text using textContent
var newH1 = document.createElement("h1");
// giving newH1 Contect to appear
newH1.textContent = "hello";

// create connection to body

// connected my newDiv to my body HTML using the id of body on my body HTML
document.getElementById("body").appendChild(newDiv)
// connected my new h1 to my newdiv 
newDiv.appendChild(newH1)

// creating a newDiv
var newDiv2 = document.createElement("div2");
// giving div2 an Id
newDiv2.Id = "higher";
// connecting div2 to my body using id body from HTML body Id
document.getElementById("body").appendChild(newDiv2)
// creating a h1 element
var NewerH1 = document.createElement("h1");
// putting content into my NewerH1
NewerH1.textContent = "Go Dumb" + " "
// coonecting my NewerH1 to my newdiv2
newDiv2.appendChild(NewerH1)
// creating text node
var t = document.createTextNode("Coding Some How")
// adding text node to my h1
NewerH1.appendChild(t)
