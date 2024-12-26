const string1 = "Hello"
const string2 = 'Hello'
// 큰 따옴표, 작은 따옴표는 그냥 취향에 맞게

// const string3 = `Hello` 
// 선택의 개념보다는 보간
// 데이터를 문자 데이터 내부에 채워놓는 개념
// 보간처리 할때는 ${}
const string3 = `Hello ${string1} ?!`
// 리터럴 : 기호를 통해서 데이터를 만드는 방식
// 템플릿 리터럴 : 백틱을 기호로 만드는 문자 데이터를 만드는 것

console.log(string3)