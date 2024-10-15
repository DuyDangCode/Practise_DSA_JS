/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  let score = 0
  for (let i = 0; i < k; i++) {
    let index = nums.indexOf(Math.max(...nums))
    score += nums[index]
    nums[index] = Math.ceil(nums[index] / 3)
  }

  return score
}

// console.log(maxKelements([10, 10, 10, 10, 10], 5))
// console.log(maxKelements([1, 10, 3, 3, 3], 3))
console.log(
  maxKelements(
    [756902131, 995414896, 95906472, 149914376, 387433380, 848985151],
    6,
  ),
)
