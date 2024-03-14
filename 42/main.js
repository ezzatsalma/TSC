var magiciansname = ['David Copperfield', 'Shin Lim', 'David Blaine'];
function show_magician(magiciansname) {
    for (var i = 0; i < magiciansname.length; i++) {
        console.log(magiciansname[i]);
    }
}
function make_great(magiciansname) {
    for (var i = 0; i < magiciansname.length; i++) {
        console.log("the great ".concat(magiciansname[i]));
    }
}
show_magician(magiciansname);
make_great(magiciansname);
