let numbers=[0,1,2,-3,4,5,-8,9,10,11,12,13,14,15,16,17,18,19,-20];

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
console.log(average(numbers));
