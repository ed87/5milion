document.getElementsByTagName("h1")[0].style.color = "#ff0000";
document.body.addEventListener('click', function () {
     const myParent = document.getElementsByTagName("h1")[0]; 
     const myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});