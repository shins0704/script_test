const a = 0.1
const b = 0.2

console.log(a + b)
// 부동 소수점 오류 -> 0.30000000000000004

console.log((a + b).toFixed(1))
console.log(typeof((a + b).toFixed(1))) // 문자 데에터가 됨,,
console.log(typeof Number((a + b).toFixed(1)))
console.log(Number((a + b).toFixed(1))) // 숫자 데이터 완료
