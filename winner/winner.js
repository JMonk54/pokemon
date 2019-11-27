//Controls the slider

let sliderContent = document.getElementById('box');

//Contain the images in an array
let image = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let i = image.length;

//Prev and Next keys function
const buttons = document.getElementsByTagName('button');

function nextImage() {
    if (i < image.length) {
        i = i + 1;
    } else {
        i = 1
    }
    sliderContent.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
};
