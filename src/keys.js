var keys = function(obj) {
    var result = [];
    for(var k in obj)
        if(obj.hasOwnProperty(k))
            result.push(k);
    return result;
};
