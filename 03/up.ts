let nAme ="hadi";
//upper case
console.log(nAme .toUpperCase());
//lowercase
console.log(nAme.toLowerCase());
//title case
function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(toTitleCase(nAme));
