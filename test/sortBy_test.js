test("this is to test sort by", function(){
         deepEqual(sortBy([1,3,2,4], function(num){ return 10 - num; }), [4,3,2,1]);
     });
