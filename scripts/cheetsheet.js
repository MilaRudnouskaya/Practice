var someDiv = document.createElement("div")

var width1 = 500;
var height1 = 300;

someDiv.style.width = width1 + "px";
someDiv.style.height = height1 + "px";
someDiv.style.backgroundColor = "#123456";
someDiv.style.position = "absolute";

document.body.appendChild(someDiv); // adds the div to the screen


var childDiv = document.createElement("div");

// you can assign multiple properties this way too
Object.assign(childDiv.style, {
    width: "100px",
    height: "50px",
    backgroundColor: "#88ffff",
    position: "absolute",
})

childDiv.style.left = "50px";    // x coordinate, from the left
childDiv.style.top = "50px";    // y coordinate, from the top

someDiv.appendChild(childDiv); // makes childDiv a child of someDiv


Creation var div = document.createElement('div');
Addition document.body.appendChild(div);
Style manipulation
Positioning div.style.left = '32px'; div.style.top = '-16px';
Classes div.className = 'ui-modal';
Modification
ID div.id = 'test';
contents (using HTML) div.innerHTML = '<span class="msg">Hello world.</span>';
contents (using text) div.textContent = 'Hello world.';
Removal div.parentNode.removeChild(div);
Accessing
by ID div = document.getElementById('test');
by tags array = document.getElementsByTagName('div');
by 'class' array = document.getElementsByClassName('ui-modal');
by CSS selector (single) div = document.querySelector('div #test .ui-modal');
by CSS selector (multi) array = document.querySelectorAll('div');
Relations (text nodes included)
children node = div.childNodes[i];
sibling node = div.nextSibling;
Relations (HTML elements only)
children element = div.children[i];
sibling element = div.nextElementSibling;