var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/加油圖.jpg') {
      myImage.setAttribute ('src','images/森林圖.jpg');
    } else {
      myImage.setAttribute ('src','images/加油圖.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '這是一個新手製作的網站, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '這是一個新手製作的網站, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '這是一個新手製作的網站, ' + myName;
  }
}

