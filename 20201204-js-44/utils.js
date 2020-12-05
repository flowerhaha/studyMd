var utils = (function(){
    // 把类数组转为数组
    function toArray(likeArray){
        var newArray = [];
        for(var i=0;i<likeArray.length;i++){
            newArray.push(likeArray[i])
        }
        return newArray;
    }
    return {
        toArray:toArray
    }
})();