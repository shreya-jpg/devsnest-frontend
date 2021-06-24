// 1. Write a JavaScript function to check whether an `input` is an array or not

function is_array(input1)
{
    if(Array.isArray(input1)){
        return true;
    }
    return false;

}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array

function array_Clone(input2){
    return input2.slice(0);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function first(arry,n){
    if(n== null){
        return arry[0];
    }
    if(arry == null){
        return 0;
    }
    if(n<0){
        return [];
    }
    return arry.slice(0,n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// 4. Write a simple JavaScript program to join all elements of the following array into a string.

var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

// 5. Write a JavaScript program to find the most frequent item of an array

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var most;
var mostFrequent=0;
var count=0;
for(let i =0 ; i<arr1.length; i++)
{
    for(let j=i; j<arr1.length; j++)
    {
        if(arr1[i]==arr1[j])
            count++;
        if(mostFrequent<count){
            mostFrequent= count;
            most= arr1[i];
        }
    }
    count=0;
}
console.log(most+ "(" + mostFrequent + " times)")

