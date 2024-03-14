let magiciansname=['David Copperfield','Shin Lim','David Blaine']
function show_magician(magiciansname){
    for(let i=0; i<magiciansname.length; i++)
{
console.log(magiciansname[i])
}}
function make_great(magiciansname){
    for(let i=0; i<magiciansname.length; i++){
    console.log(`the great ${magiciansname[i]}`)
}}
show_magician(magiciansname)
make_great(magiciansname)
