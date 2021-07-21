# 스파르타코딩클럽 개발일지(Sparta CodingClub Development Log)
> <h2>앱개발 종합반 24기(2021.07.05~2021.08.15)</h2>

<br/>

## 0주차(~2021.7.11)
- <h3><b>2021.7.11 0주차 수강 완료✔</b></h3>
- 개발환경 구축
- Android Studio, Node.js, npm, Visual Stdio, Google Chrome 설치

## 1주차(~2021.7.18)
- <h3><b>2021.7.13 1주차 수강 완료✔</b></h3>
- <h3>공부한 내용</h3>
  <h4>1. 앱 서비스의 기본 동작 구조</h4>
  앱 서비스를 만든다 = '클라이언트 + 서버' 만들기<br/>
  클라이언트 = 사용자가 보는 화면<br/>
  서버 = 원하는 데이터가 있는 곳, 원하는 데이터를 요청하면 이에 응답해주는 곳<br/><br/>
  
  앱 개발?? 💡 '안드로이드' or 'iOS(아이폰)'<br/>
  안드로이드 : <strong>JAVA&Kotlin</strong> 기술로 개발   
  iOS(아이폰) : <strong>Swift</strong> 기술로 개발<br/><br/>
  
  앱 개발 종류
  안드로이드, iOS 각각 개발 => <strong>네이티브 앱</strong><br/>
  웹 사이트를 만든 후 껍데기를 씌워 간단 배포 => <strong>하이브리드 앱</strong><br/>
  네이티브 앱 + 하이브리드 앱 => <strong>크로스 플랫폼 앱</strong><br/><br/>
  
  <strong>리액트 네이티브(React Native)</strong><br/>
  크로스 플랫폼 앱 개발 언어 중 하나<br/>
  리액트(React.js) 라이브러리/프레임워크 기반으로 앱 제작하는 기술<br/>
  자바스크립트(javascript)로 개발 가능<br/><br/>
  
  <h4>2. Javascript 문법</h4>
  변수 선언 시 '<strong>let</strong>'을 붙임</br>
  💡 지금까지 배워온 다른 언어와 다르게 자료형이 모두 let인 것이 특이하게 느껴졌다.</br><br/>
  
  자바스크립트 출력   
  <strong>window.alert()</strong> 메소드 : 대화 상자를 띄어 사용자에게 데이터 출력    
  <strong>document.write()</strong> 메소드 : 웹 페이지가 로딩될 때 실행되면, 웹 페이지에 가장 먼저 데이터 출력    
  <strong>console.log()</strong> 메소드 : 웹 브라우저의 콘솔을 통해 데이터 출력   
  💡 출력 메소드가 정말 다양하다! chrome 웹브라우저 콘솔 창을 통해 공부하여 console.log() 메소드를 사용하였다.<br/><br/>
  
  숫자+문자 연산   
  ex) let a = 1
  let first = 'Bob'   
  console.log(first + a)   
  // 결과 : Bob1   
  💡 문자+숫자를 하면, <strong>숫자->문자로 변환</strong> 후 수행<br/><br/>
  
  리스트와 딕셔너리의 조합 가능   
  ex) names = [{'name':'bob','age':20},{'name':'carry','age':38}]   
  // names[0]['name']의 값은? 'bob'   
  // names[1]['name']의 값은? 'carry'   
  💡 리스트와 딕셔너리의 개념은 알고 있었으나 두 가지를 조합해서 사용하면 더욱 더 유용하게 사용할 수 있겠다는 생각이 들었다.   
  💡 리스트 + 딕셔너리 => JSON 데이터 구조<br/><br/>
  
  함수 선언   
  ex1) 함수 선언 방식   
  function 함수이름(매개변수) { ..... } // 만들기   
  함수이름(매개변수); // 사용하기   
  
  ex2) 또 다른 함수 선언 방식   
  let a = function(){ console.log("리터럴 방식"); } // 만들기   
  a() // 사용하기
  💡 Javascript에서는 보통 function 키워드를 사용하여 함수를 선언한다.<br/><br/>
  
  자바스크립트 기본 제공 함수     
  .toUpperCase() : 모든 알파벳을 대문자로 바꾸고 싶은 경우   
  .split() : 특정 문자로 문자열을 나누고 싶은 경우   
  .join() : 특정 문자로 합치고 싶은 경우<br/><br/>
  
  <h4>3. 앱개발에 자주 쓰이는 Javascript(⭐️유용함!)</h4>   
  함수를 더 간략하게! - <strong>화살표 함수</strong><br/>   
  [기존 방식]<br/>    
  let a = function() { console.log("function"); }<br/> 
  
  [최신 방식]<br/> 
  let a = () => { console.log("arrow function"); }<br/> 
  💡 function을 없애고 () 뒤에 화살표를 추가한다. => 함수 간략화<br/><br/>
  
  딕셔너리 키와 값을 빠르게 꺼내기! - <strong>비구조 할당</strong><br/>
  let blog = { owner : "noah", url : "noahlogs.tistory.com", getPost() { console.log("ES6 문법 정리"); }};<br/>  

  //기존 할당 방식   
  let owner = blog.owner   
  let getPost = blog.getPost()   

  //비구조 할당 방식   
  let { owner, getPost } = blog;      
  💡 객체 이름을 매번 붙여줘야 했던 번거로움을 한번에 해결!<br/><br/>

## 2주차(~2021.7.25)
- <h3><b>2021.7.21 2주차 수강 완료✔</b></h3>
- <h3>공부한 내용</h3>
  <h4>리액트 네이티브(React Native) 앱 개발 시작!</h4>
  1. 앱 개발 준비<br/>
  2. 앱 화면 만들기<br/>
  3. 앱&자바스크립트 연습<br/><br/>
  
  > 앱 개발 준비
  - Node.js, npm 설치<br/>
  👉 Node.js : 자바스크립트 개발 환경 구축<br/>
  👉 npm : 자바스크립트 앱 개발 도구들을 가져와서 사용할 수 있게 해주는 기능 제공<br/>
  
  - 리액트 네이티브 = 리액트(React) + 네이티브(Native)<br/>
  👉 자바스크립트 언어 하나로 안드로이드&iOS앱 두 가지 모두 만들어주는 라이브러리<br/>
  👉 Visual Studio Code를 사용하여 실습을 진행하였음.<br/>
  
  - Expo = 앱 개발을 더욱 편리하게 해주는 도구 모음집<br/>
  👉 개발 중인 앱을 쉽게 확인 가능하게 해줌.<br/>
  👉 'Expo Client' 앱을 설치하여 실습을 진행하였음.<br/><br/>
  
  > 앱 화면 만들기<br/>
  - 리액트 네이티브 앱 개발에서 레이아웃을 잡는 문법 언어 : <strong>"JSX"</strong><br/>
  - JSX 기본 문법<br/>
    - &lt;View&gt; : 화면의 영역(레이아웃)을 잡아주는 엘리먼트<br/>
    - &lt;Text&gt; : 앱에 글을 작성할 때 사용하는 엘리먼트<br/>
    - &lt;ScrollView&gt; : 앱 화면을 벗어나는 영역의 경우 스크롤이 가능해지는 엘리먼트<br/>
    - &lt;Button&gt; : 버튼을 달아주는 엘리먼트<br/>
    👉 title : 버튼 안에 있는 문자, color : 버튼 색상, onPress : 버튼을 눌렀을 때 이벤트 발생(함수 필요)<br/>
    👉 TouchableOpacity : 앱에서 만든 임의의 영역과 디자인에 버튼 기능을 달아줌.(Button 기능+)<br/>
    - &lt;Image&gt; : 이미지를 넣어주는 엘리먼트<br/>
    👉 1. 폴더 내에 있는 이미지 경로를 입력하여 import하여 사용<br/>
    👉 2. uri를 source 부분에 달아서 외부 이미지 불러오기<br/><br/>
    
  - StyleSheet 문법<br/>
    - styles 속성 : 모든 태그에 공통적으로 사용<br/>
    - styleSheet : 태그에 스타일을 주는 방식 적용 -> 객체(딕셔너리)를 만들 때 잘 정돈해 놓는 객체<br/>
    - 사용 시에 style 속성 아래서 만든 객체 키 값을 부여하여 적용 ex) &lt;View style={styles.container}&gt;<br/>
    - margin : 테두리와 박스의 최종 경계 사이의 여백<br/>
    - border : 박스의 테두리 두께<br/>
    - padding : 내용과 테두리 사이의 여백<br/><br/>

  - Flex ⭐️⭐️<br/>
    - 컨텐츠의 위치(영역의 레이아웃)를 결정하는 중요한 요소<br/>
    - flex : 영역을 차지하는 속성<br/>
    - flexDirection : 자리 잡은 영역의 방향<br/>
    ➕ row - 가로방향으로 배치, column - 세로방향으로 배치(기본 값)<br/>
    ➕ 예를 들어, 가로로 여러 개의 버튼을 달고 싶은 경우에 flexDirection의 속성을 사용하면 쉽게 해결완료❗️<br/>
    - justifyContent : flexDirection과 <strong>'동일한'</strong> 방향으로 정렬하는 속성<br/>
    ➕ flexDirection='column'인 경우 - 상하정렬<br/>
    ➕ flexDirection='row'인 경우 - 좌우정렬<br/>
    ➕ 그 외 속성 : flex-start, center, flex-end, space-between, space-around<br/>
    - alignItems : flexDirection과 <strong>'수직한'</strong> 방향으로 정렬하는 속성<br/>
    ➕ flexDirection='column'인 경우 - 좌우정렬<br/>
    ➕ flexDirection='row'인 경우 - 상하정렬<br/>
    ➕ 그 외 속성 : flex-start, center, flex-end, stretch<br/><br/>
    
  > 앱&자바스크립트 연습<br/>
    - 모듈 시스템(Module System)<br/>
    👉 여러 자바스크립트 파일이 있을 경우, 서로 다른 자바스크립트 파일에서 함수 불러오기 or 자바스크립트 파일 불러오기<br/>
    
    - 앱에서의 모듈 시스템<br/>
    👉 App.js : 앱의 화면을 그려주는 커다란 함수 -> export default function App() {...}<br/>
    👉 여러 앱 파일을 만들 때 export default function 으로 함수를 내보낼 수 있음<br/>
    
    - 데이터를 반복문 돌리기<br/>
    👉 'import data from (데이터 파일 경로);'를 입력하여 import 시킨 후 반복문 수행<br/>
    👉 tip❗️ : 가장 자주 사용되는 조건문 -> 삼항 연산자 사용(변수 = (조건) ? (참) : (거짓))<br/>
