// 배열에서 특정 원소 갯수 구하기 - map 함수를 사용해서 해결하기
let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

let count = 0;
fruit_list.map((f)=>{ if(f == "딸기") count += 1 })
console.log("딸기 개수 :", count)