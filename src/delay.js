var delay = function(func, t){
    setTimeout(func(Array.prototype.slice.call(arguments, 2)), t);
};

var add = function(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; ++i)
        sum += arr[i];
    return sum;
};
