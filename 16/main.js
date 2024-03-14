var message = " 'you are invited to dinner'";
var names = ['AMMAR', 'AMMARA', 'HAFSA'];
var quantity = names.push('NAILA');
names.unshift('Fatima');
names.push('Maria');
names.splice(names.length / 2, 0, "salma");
console.log('I found a bigger dinner table');
names.forEach(function (names) {
    console.log("dear  ", names, " join for dinner");
});
