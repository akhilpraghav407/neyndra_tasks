function AltAndSrc() {
    let images = document.querySelectorAll('img');
    let imageData = [];
    images.forEach((img) => {
        imageData.push({
            image_alt: img.alt,
            image_src: img.src
        });
    });
    return imageData;
}
console.log(AltAndSrc());