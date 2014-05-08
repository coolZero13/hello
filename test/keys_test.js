module('keys');

test('it returns empty for empty object', function() {
    deepEqual(keys({}), []);
});

test('it returns all the keys of the object', function() {
    deepEqual(keys({x: 30, y: 50, z: 60}), ['x', 'y', 'z']);
});
