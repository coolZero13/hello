var sortBy = function(list, func){
    var cmp = function(a,b){
        if(func(a) === func(b))
            return 0;
        return func(a) < func(b) ? -1: 1;};
    return sort(list, cmp) ;
};
