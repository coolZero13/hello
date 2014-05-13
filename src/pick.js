var pick = function(obj, keys){
    var result = {};
    for(var i = 0; i < keys.length; ++i){
        if(keys[i] in obj)
            result[keys[i]] = obj[keys[i]];
    }
    return result;
};
