var pick = function(obj, keys){
    var result = {};
    each(keys, function(key){
        if(key in obj)
            result[key] = obj[key];
    });
    return result;
};

var each = function(arr, func){
    for(var i = 0; i < arr.length; ++i)
        func(arr[i]);
};
