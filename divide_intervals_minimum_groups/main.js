/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  console.log(intervals)
  let result = []

  result.push([intervals[0]])
  console.log(result)

  Loop1: for (let i = 1; i < intervals.length; i++) {
    Loop2: for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < result[j].length; k++) {
        if (checkOverlap(intervals[i], result[j][k])) continue Loop2
      }
      result[j].push(intervals[i])
      continue Loop1
    }
    result.push([intervals[i]])
  }
  console.log(result)

  return result.length
}

function checkOverlap(intervalA, intervalB) {
  let startA = intervalA[0],
    startB = intervalB[0],
    endA = intervalA[1],
    endB = intervalB[1]
  if (endB < startA) {
    // console.log('EndB', endB)
    // console.log('StartA', startA)
    return false
  }
  if (endA < startB) {
    // console.log('EndA', endA)
    // console.log('StartB', startB)
    return false
  }
  return true
}

//
// console.log(
//   minGroups([
//     [5, 10],
//     [6, 8],
//     [1, 5],
//     [2, 3],
//     [1, 10],
//   ]),
// )
//
// console.log('--------------------------------')
//
// console.log(
//   minGroups([
//     [1, 3],
//     [5, 6],
//     [8, 10],
//     [11, 13],
//   ]),
// )
//
console.log(
  minGroups([
    [229966, 812955],
    [308778, 948377],
    [893612, 952735],
    [395781, 574123],
    [478514, 875165],
    [766513, 953839],
    [460683, 491583],
    [133951, 212694],
    [376149, 838265],
    [541380, 686845],
    [461394, 568742],
    [804546, 904032],
    [422466, 467909],
    [557048, 758709],
    [680460, 899053],
    [110928, 267321],
    [470258, 650065],
    [534607, 921875],
    [292993, 994721],
    [645020, 692560],
    [898840, 947977],
    [33584, 330630],
    [903142, 970252],
    [17375, 626775],
    [804313, 972796],
    [582079, 757160],
    [785002, 987823],
    [599263, 997719],
    [486500, 527956],
    [566481, 813653],
    [211239, 863969],
    [808577, 883125],
    [21880, 516436],
    [264747, 412144],
    [327175, 772333],
    [984807, 988224],
    [758172, 916673],
    [23583, 406006],
    [954674, 956043],
    [379202, 544291],
    [688869, 785368],
    [841735, 983869],
    [99836, 916620],
    [332504, 740696],
    [740840, 793924],
    [896607, 920924],
    [868540, 922727],
    [125849, 550941],
    [433284, 685766],
  ]),
)
