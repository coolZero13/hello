test("this is to test sort",
     function(){
         deepEqual(sort([1,3,2,4], function(a, b){ return a - b;}), [1,2,3,4]);
     });
