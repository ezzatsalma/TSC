var current_users = ['emmad', 'esra', 'elsa', 'emra'];
var new_users = ['emmad', 'hina', 'HADI', 'ELSA'];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log("sorry the use name ".concat(new_user, " is taken"));
    }
    else {
        console.log("welcome ".concat(new_user));
    }
}
