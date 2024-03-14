function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("size=".concat(size, " ,MESSAGE = ").concat(message));
}
make_shirt();
// MEDIUM
make_shirt("MEDIUM");
//SMALL
make_shirt("SMALL", "KEEP CALM AND CODE ON");
