//let people = ['emad','esma','enna','era']
var people = [];
if (people.length == 0) {
    console.log("we need to add some people");
}
else {
    var people_age = 30;
    if (people_age < 2)
        console.log("it's a baby");
    else if (people_age >= 2 && people_age < 4)
        console.log("it's a toddler");
    else if (people_age >= 4 && people_age < 13)
        console.log("it's a kid");
    else if (people_age >= 13 && people_age < 20)
        console.log("it's a teenager");
    else if (people_age >= 20 && people_age < 65)
        console.log("it's an adult");
    else if (people_age == 65)
        console.log("it's an elder");
}
