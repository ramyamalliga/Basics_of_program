function minimum (arr)
{
    let i;
    let min = arr[0];
    for (i = 1; i < arr.length; i++)
    {
        if(arr[i] < min)
        min = arr[i]
    }
    return min
}
let arr = [3,2,1,3];
console.log("Minimum array element is" , minimum(arr));

