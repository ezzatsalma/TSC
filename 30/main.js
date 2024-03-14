var usernames = ['admin', 'eric', 'niel', 'bruce', 'mandy'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log('welcome admin! would you like to see status report?');
    }
    else {
        {
            console.log("welcome ".concat(username));
        }
    }
}
