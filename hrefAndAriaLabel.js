const section = document.querySelector('section');
var links = section.querySelectorAll('a');
var arrayLinks = [];
links.forEach(link => {
    arrayLinks.push({
        ariaLabel: link.getAttribute('aria-label'),
        href: link.getAttribute('href')
    });
});
console.log(arrayLinks);