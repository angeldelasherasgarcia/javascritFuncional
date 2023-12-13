var arr = [1, 2, 3, 4];
function getMultiple(){
    
    var i;

    function multipleBy10(val) {
        i = 10;
        return val * i;
    }

    for (i = 0; i < arr.length; i++) {
         arr[i] = multipleBy10(arr[i]);
    }
    console.log(arr)
    return arr;
}
