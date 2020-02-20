"use strict";
function loggingIndentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIndentity({ length: 2 });
