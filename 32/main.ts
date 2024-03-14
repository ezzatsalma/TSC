let current_users=['emmad','esra','elsa','emra']
let new_users=['emmad','hina','HADI','ELSA']
let current_users_lower=current_users.map(user=>user.toLowerCase())
for(let new_user of new_users){


let  new_user_lower =new_user .toLowerCase()
if (current_users_lower.includes(new_user_lower)){
console.log(`sorry the use name ${new_user} is taken`)
}else{
console.log(`welcome ${new_user}`)
}}
