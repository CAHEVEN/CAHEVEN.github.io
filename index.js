function bigImg(x) {
  x.style.height = "150px";
  x.style.width = "150px";
  x.style.top= "-10px";
  x.style.left= "-15px";

  if (x.children.length != 0) {
    //console.log('Element has children');
    //console.log(x.children[0]);
    const y = x.children[0];
    y.style.height = "120px";
    y.style.width = "120px";
    y.style.top= "15px";
    y.style.left= "15px";
  }
  

}

function normalImg(x) {
  x.style.height = "123px";
  x.style.width = "123px";
  x.style.top= "0px";
  x.style.left= "0px";
  if (x.children.length != 0) {
    const y = x.children[0];
    y.style.height = "90px";
    y.style.width = "90px";
    y.style.top= "17px";
    y.style.left= "17px";
  }
}




/*function handleMouseOver(event) {
    const elementId = event.target.id;
    console.log("Hello, World! 2");
    const target= event.target;
    var innerTarget = target.getElementsByClassName("img-2")[0];
    //innerTarget.className = "img-Big";
    console.log(innerTarget.className);
    console.log(target.className);
    target.className = "icon-box-Big";
  }
  
const elements = document.querySelectorAll('.icon-box'); 
elements.forEach(element => {
    element.addEventListener('mouseover', handleMouseOver);
});*/



/*
var d = document.getElementById("button");
d.addEventListener('click',function(){
    d.className = d.className + " move";
});


var outerTarget = document.getElementById("foo");
var innerTarget = outerTarget.getElementsByClassName("bar")[0];
innerTarget.textContent = "Goodbye world!";



function handleMouseOver(event) {
  const elementId = event.target.id;
  if (elementId) {
    console.log(Mouse over element with ID: ${elementId});
    // Perform actions with the ID, such as updating other elements or storing the value.
  }
}

// Add event listeners to elements that should trigger the function on hover.
const elements = document.querySelectorAll('.hoverable'); // Select elements with class 'hoverable'
elements.forEach(element => {
  element.addEventListener('mouseover', handleMouseOver);
});



if (x.children.length === 0) {
    // The element has no children
    console.log('Element has no children');
  } else {
    // The element has children
    console.log('Element has children');
  }

 */