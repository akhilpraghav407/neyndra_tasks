function AltAndSrc() {
    let images = document.querySelectorAll('body img');
    let arrayImages = [];
    images.forEach((img) => {
        arrayImages.push({
            image_alt: img.alt,
            image_src: img.src
        });
    });
    return arrayImages;
}
console.log(AltAndSrc());