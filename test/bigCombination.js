/*
 * use mocha to test me
 * http://visionmedia.github.com/mocha/
 */
var assert, Combinatorics;
if (this['window'] !== this) {
    assert = require("assert");
    Combinatorics = require('../.');
}
var is_deeply = function (a, e, m) {
    return function () {
        assert.equal(JSON.stringify(a), JSON.stringify(e), m)
    }
};

describe('Combinatorics.bigCombination', function () {
    var a = 'abcdef'.split(''),
        b = 'abcdefghijklmnopqrstuvwxyz012345'.split(''),
        c = Combinatorics.bigCombination(a, 1);
    it([a, 1], is_deeply(c.toArray(), [
        ["a"],
        ["b"],
        ["c"],
        ["d"],
        ["e"],
        ["f"]
    ]));
    it(0 + c, is_deeply(0 + c, c.toArray().length));
    it(c.length, is_deeply(c.length, c.toArray().length));
    c = Combinatorics.bigCombination(a, 2);
    it([a, 2], is_deeply(c.toArray(), [
        ["a", "b"],
        ["a", "c"],
        ["b", "c"],
        ["a", "d"],
        ["b", "d"],
        ["c", "d"],
        ["a", "e"],
        ["b", "e"],
        ["c", "e"],
        ["d", "e"],
        ["a", "f"],
        ["b", "f"],
        ["c", "f"],
        ["d", "f"],
        ["e", "f"]
    ]));
    it(0 + c, is_deeply(0 + c, c.toArray().length));
    it(c.length, is_deeply(c.length, c.toArray().length));
    c = Combinatorics.bigCombination(a, 3);
    it([a, 3], is_deeply(c.toArray(), [
        ["a", "b", "c"],
        ["a", "b", "d"],
        ["a", "c", "d"],
        ["b", "c", "d"],
        ["a", "b", "e"],
        ["a", "c", "e"],
        ["b", "c", "e"],
        ["a", "d", "e"],
        ["b", "d", "e"],
        ["c", "d", "e"],
        ["a", "b", "f"],
        ["a", "c", "f"],
        ["b", "c", "f"],
        ["a", "d", "f"],
        ["b", "d", "f"],
        ["c", "d", "f"],
        ["a", "e", "f"],
        ["b", "e", "f"],
        ["c", "e", "f"],
        ["d", "e", "f"]
    ]));
    it(0 + c, is_deeply(0 + c, c.toArray().length));
    it(c.length, is_deeply(c.length, c.toArray().length));
    c = Combinatorics.bigCombination(a, 4);
    it([a, 4], is_deeply(c.toArray(), [
        ["a", "b", "c", "d"],
        ["a", "b", "c", "e"],
        ["a", "b", "d", "e"],
        ["a", "c", "d", "e"],
        ["b", "c", "d", "e"],
        ["a", "b", "c", "f"],
        ["a", "b", "d", "f"],
        ["a", "c", "d", "f"],
        ["b", "c", "d", "f"],
        ["a", "b", "e", "f"],
        ["a", "c", "e", "f"],
        ["b", "c", "e", "f"],
        ["a", "d", "e", "f"],
        ["b", "d", "e", "f"],
        ["c", "d", "e", "f"]
    ]));
    it(0 + c, is_deeply(0 + c, c.toArray().length));
    it(c.length, is_deeply(c.length, c.toArray().length));
    c = Combinatorics.bigCombination(a, 5);
    it([a, 5], is_deeply(c.toArray(), [
        ["a", "b", "c", "d", "e"],
        ["a", "b", "c", "d", "f"],
        ["a", "b", "c", "e", "f"],
        ["a", "b", "d", "e", "f"],
        ["a", "c", "d", "e", "f"],
        ["b", "c", "d", "e", "f"]
    ]));
    it([a, 5], is_deeply(c.filter(function(a){ return a[0] !== 'a'}), [
        ["b", "c", "d", "e", "f"]
    ]));
    c = Combinatorics.bigCombination(a, 6);
    it([a, 6], is_deeply(c.toArray(), [
        ["a", "b", "c", "d", "e", "f"]
    ]));
    it(0 + c, is_deeply(0 + c, c.toArray().length));
    it(c.length, is_deeply(c.length, c.toArray().length));


    // Testing large value boundaries...
    c = Combinatorics.bigCombination(b, 1);
    it([b, 1], is_deeply(c.toArray(), [
        ["a"], ["b"], ["c"], ["d"], ["e"], ["f"],
        ["g"], ["h"], ["i"], ["j"], ["k"], ["l"],
        ["m"], ["n"], ["o"], ["p"], ["q"], ["r"],
        ["s"], ["t"], ["u"], ["v"], ["w"], ["x"],
        ["y"], ["z"], ["0"], ["1"], ["2"], ["3"],
        ["4"], ["5"]
    ]));
    c = Combinatorics.bigCombination(b, 32);
    it([b, 32], is_deeply(c.toArray(), [
        ["a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x",
        "y", "z", "0", "1", "2", "3",
        "4", "5"]
    ]));
    c = Combinatorics.bigCombination(b);
    it([b], is_deeply(c.toArray(), [
        ["a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x",
        "y", "z", "0", "1", "2", "3",
        "4", "5"]
    ]));

});
