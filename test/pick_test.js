test('this is a test for pick', function(){
    deepEqual(
        pick({'name': 'john', 'age': 20, 'gender': 'male'}, ['name','gender']),
        {'name': 'john', 'gender': 'male'}
    );
});
