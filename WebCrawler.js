let string = prompt("Enter string that you want to find :");
let links = document.links;
let results = new Array;

Array.from(links).forEach((element) => {
    if (element.href.includes(string)) {
        results.push(element.href);
    }
})

console.log(results);