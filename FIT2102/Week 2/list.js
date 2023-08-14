"use strict";
var lists;
(function (lists) {
    const list = {
        data: 1,
        next: {
            data: 2,
            next: {
                data: 3,
                next: null
            }
        }
    };
    function length(l) {
        return l ? 1 + length(l.next) : 0;
    }
    function forEach(l, f) {
        if (l) {
            f(l.data);
            forEach(l.next, f);
        }
    }
    console.log(length(list));
    forEach(list, console.log);
})(lists || (lists = {}));
