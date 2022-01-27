let image = [1, 2, 3, 4, 5];

let imageCurrentIndex = 0;

image[0] = 'block'
const changeIndexRight = function (){
    for (let i = 0; i < image.length; i++) {
        image[i] = 'none';
    }
    if(imageCurrentIndex === image.length -1){
        imageCurrentIndex = 0
    }
    image[imageCurrentIndex + 1] = 'block';
    imageCurrentIndex++
    console.log(imageCurrentIndex)
}
changeIndexRight()


console.log(image)