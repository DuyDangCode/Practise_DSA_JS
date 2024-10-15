/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  let score = 0
  let heap = []
  for (let i = 0; i < nums.length; i++) {
    addToMaxHeap(nums[i], heap)
  }
  for (let i = 0; i < k; i++) {
    let maxValue = getMax(heap)
    score += maxValue
    addToMaxHeap(Math.ceil(maxValue / 3), heap)
  }

  return score
}

function addToMaxHeap(value, arr) {
  arr.push(value)
  heapifyUp(arr)
}

function getMax(arr) {
  let maxValue = arr[0]
  arr[0] = arr[arr.length - 1]
  arr.pop()
  heapiyDown(arr)
  return maxValue
}

function heapifyUp(arr) {
  let index = arr.length - 1
  let parentIndex = Math.floor((index - 1) / 2)
  while (parentIndex >= 0 && arr[parentIndex] < arr[index]) {
    let temp = arr[parentIndex]
    arr[parentIndex] = arr[index]
    arr[index] = temp
    index = parentIndex
    parentIndex = Math.floor((index - 1) / 2)
  }
}

function heapiyDown(arr) {
  let index = 0
  let leftChildIndex = 2 * index + 1
  while (leftChildIndex < arr.length) {
    let rightChildIndex = 2 * index + 2
    let largerIndex = leftChildIndex
    if (
      rightChildIndex < arr.length &&
      arr[rightChildIndex] > arr[leftChildIndex]
    ) {
      largerIndex = rightChildIndex
    }
    if (arr[index] > arr[largerIndex]) {
      break
    }

    let temp = arr[largerIndex]
    arr[largerIndex] = arr[index]
    arr[index] = temp
    index = largerIndex
    leftChildIndex = 2 * index + 1
  }
}

// console.log(maxKelements([10, 10, 10, 10, 10], 5))
console.log(maxKelements([1, 10, 3, 3, 3], 3))
console.log(maxKelements([10, 10, 10, 10, 10], 5))
console.log(maxKelements([672579538, 806947365, 854095676, 815137524], 3))
