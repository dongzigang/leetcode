/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
debugger
var removeElement = function(nums, val) {
    debugger
    let p1 = 0, // 写指针
        p2 = 0; // 读指针

    while (p2 < nums.length) {

        if (nums[p2] != val) {
            p1++;
            nums[p1] = nums[p2];
        }
        p2++;
    }
    return p1 + 1;
};

let a = [1,2,3,5,5,8,5]
let val = 5
console.log(removeElement(a,val))