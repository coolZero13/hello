var sort = function(list, cmp){
    if(list.length == 0)
        return [];

    var result = [list[0]];

    for(var i = 1; i < list.length; ++i)
    {
        result.push(list[i]);
        for(var j = result.length - 1; j > -1; --j)
        {
            if(cmp(result[j], result[j - 1]) < 0)
            {
                swap(result, j, j - 1);
            }
        }
    }
    return result;
}


var swap = function (arr, a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
