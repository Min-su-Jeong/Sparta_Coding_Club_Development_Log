# 스파르타코딩클럽 개발일지(Sparta CodingClub Development Log)
> <h2>앱개발 종합반 24기(2021.07.05~2021.08.15)</h2>

<br/>

## 0주차(~2021.7.11)
- <h3><b>2021.7.11 0주차 수강 완료✔</b></h3>
- 개발환경 구축
- Android Studio, Node.js, npm, Visual Stdio, Google Chrome 설치<br/><br/><br/>

## 1주차(~2021.7.18)
- <h3><b>2021.7.13 1주차 수강 완료✔</b></h3>
- <h3>공부한 내용</h3>
  <h4>앱의 동작 구조 및 Javascript 이해</h4>
  1. 앱의 기본적인 동작 구조<br/>
  2. Javascript 문법<br/>
  3. 앱 개발에 자주 쓰이는 Javascript<br/><br/>
  
  > 앱 서비스의 기본 동작 구조<br/>
  - 클라이언트 & 서버<br/>
  👉 앱 서비스를 만든다 = '클라이언트 + 서버' 만들기<br/>
  👉 클라이언트 = 사용자가 보는 화면<br/>
  👉 서버 = 원하는 데이터가 있는 곳, 원하는 데이터를 요청하면 이에 응답해주는 곳<br/><br/>
  👉 앱 개발?? 💡 '안드로이드' or 'iOS(아이폰)'<br/>
  👉 안드로이드 : <strong>JAVA&Kotlin</strong> 기술로 개발<br/> 
  👉 iOS(아이폰) : <strong>Swift</strong> 기술로 개발<br/><br/>
  
  - 앱 개발 종류<br/>
  👉 안드로이드, iOS 각각 개발 => <strong>네이티브 앱</strong><br/>
  👉 웹 사이트를 만든 후 껍데기를 씌워 간단 배포 => <strong>하이브리드 앱</strong><br/>
  👉 네이티브 앱 + 하이브리드 앱 => <strong>크로스 플랫폼 앱</strong><br/><br/>
  
  - <strong>리액트 네이티브(React Native)</strong><br/>
  👉 크로스 플랫폼 앱 개발 언어 중 하나<br/>
  👉 리액트(React.js) 라이브러리/프레임워크 기반으로 앱 제작하는 기술<br/>
  👉 자바스크립트(javascript)로 개발 가능<br/><br/><br/><br/>
  
  > Javascript 문법
  
  - 변수 선언 시 '<strong>let</strong>'을 붙임</br>
  💡 지금까지 배워온 다른 언어와 다르게 자료형이 모두 let인 것이 특이하게 느껴졌다.</br><br/>
  
  - 자바스크립트 출력<br/>
  <strong>window.alert()</strong> 메소드 : 대화 상자를 띄어 사용자에게 데이터 출력<br/>
  <strong>document.write()</strong> 메소드 : 웹 페이지가 로딩될 때 실행되면, 웹 페이지에 가장 먼저 데이터 출력<br/>
  <strong>console.log()</strong> 메소드 : 웹 브라우저의 콘솔을 통해 데이터 출력<br/>
  💡 출력 메소드가 정말 다양하다! chrome 웹브라우저 콘솔 창을 통해 공부하여 console.log() 메소드를 사용하였다.<br/><br/>
  
  - 숫자+문자 연산   
  ``` javascript
  ex) 
  
  let a = 1
  let first = 'Bob'   
  console.log(first + a)   
  // 결과 : Bob1  
  
  💡 문자+숫자를 하면, 숫자->문자로 변환 후 수행!
  ```
  
  <br/>
  
  - 리스트와 딕셔너리의 조합 가능   
  ``` javascript
  ex) 
  
  names = [{'name':'bob','age':20},{'name':'carry','age':38}]   
  // names[0]['name']의 값은? 'bob'   
  // names[1]['name']의 값은? 'carry'
  
  💡 두 가지를 조합해서 사용하면 더욱 더 유용하고 편리하게 사용할 수 있음!  
  💡 리스트 + 딕셔너리 => JSON 데이터 구조
  ```
  
  <br/>
  
  - 함수 선언
  ``` javascript
  ex1) 함수 선언 방식
  
  function 함수이름(매개변수) { ..... } // 만들기   
  함수이름(매개변수); // 사용하기   
  
  
  ex2) 또 다른 함수 선언 방식   
  
  let a = function(){ console.log("리터럴 방식"); } // 만들기   
  a() // 사용하기
  
  💡 Javascript에서는 보통 function 키워드를 사용하여 함수를 선언한다.
  ```
  
  <br/>
  
  - 자바스크립트 기본 제공 함수     
  👉 .toUpperCase() : 모든 알파벳을 대문자로 바꾸고 싶은 경우   
  👉 .split() : 특정 문자로 문자열을 나누고 싶은 경우   
  👉 .join() : 특정 문자로 합치고 싶은 경우<br/><br/><br/><br/>
  
  > 앱개발에 자주 쓰이는 Javascript(⭐️유용함!)
  
  - 함수를 더 간략하게! - <strong>화살표 함수</strong><br/>   
  ``` javascript
  [기존 방식]
  let a = function() { console.log("function"); }
  
  [최신 방식]
  let a = () => { console.log("arrow function"); }
  
  💡 function을 없애고 () 뒤에 화살표를 추가한다. => 함수 간략화
  ```
  
  <br/>
  
  - 딕셔너리 키와 값을 빠르게 꺼내기! - <strong>비구조 할당</strong><br/>
  ``` javascript
  let blog = { owner : "noah", url : "noahlogs.tistory.com", getPost() { console.log("ES6 문법 정리"); }}; 

  //기존 할당 방식   
  let owner = blog.owner   
  let getPost = blog.getPost()   

  //비구조 할당 방식   
  let { owner, getPost } = blog;
  
  💡 객체 이름을 매번 붙여줘야 했던 번거로움을 한번에 해결!
  ```

  <br/><br/>
  
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
  👉 'Expo Client' 앱을 설치하여 실습을 진행하였음.<br/><br/><br/>
  
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
    👉 2. uri를 source 부분에 달아서 외부 이미지 불러오기<br/>
    
  - StyleSheet 문법<br/>
    - styles 속성 : 모든 태그에 공통적으로 사용<br/>
    - styleSheet : 태그에 스타일을 주는 방식 적용 -> 객체(딕셔너리)를 만들 때 잘 정돈해 놓는 객체<br/>
    - 사용 시에 style 속성 아래서 만든 객체 키 값을 부여하여 적용 ex) &lt;View style={styles.container}&gt;<br/>
    - margin : 테두리와 박스의 최종 경계 사이의 여백<br/>
    - border : 박스의 테두리 두께<br/>
    - padding : 내용과 테두리 사이의 여백<br/>

  - Flex ⭐️⭐️<br/>
    - 컨텐츠의 위치(영역의 레이아웃)를 결정하는 중요한 요소<br/>
    - flex : 영역을 차지하는 속성<br/>
    - flexDirection : 자리 잡은 영역의 방향<br/>
    ➕ row - 가로방향으로 배치, column - 세로방향으로 배치(기본 값)<br/>
    ➕ 예를 들어, 가로방향으로 여러 개의 버튼을 배치하고 싶은 경우에 flexDirection의 속성을 사용하면 쉽게 해결완료❗️<br/>
    - justifyContent : flexDirection과 <strong>'동일한'</strong> 방향으로 정렬하는 속성<br/>
    ➕ flexDirection='column'인 경우 - 상하정렬<br/>
    ➕ flexDirection='row'인 경우 - 좌우정렬<br/>
    ➕ 그 외 속성 : flex-start, center, flex-end, space-between, space-around<br/>
    - alignItems : flexDirection과 <strong>'수직한'</strong> 방향으로 정렬하는 속성<br/>
    ➕ flexDirection='column'인 경우 - 좌우정렬<br/>
    ➕ flexDirection='row'인 경우 - 상하정렬<br/>
    ➕ 그 외 속성 : flex-start, center, flex-end, stretch<br/><br/><br/>
    
  > 앱&자바스크립트 연습<br/>
    - 모듈 시스템(Module System)<br/>
    👉 여러 자바스크립트 파일이 있을 경우, 서로 다른 자바스크립트 파일에서 함수 불러오기 or 자바스크립트 파일 불러오기<br/>
    
    - 앱에서의 모듈 시스템<br/>
    👉 App.js : 앱의 화면을 그려주는 커다란 함수 -> export default function App() {...}<br/>
    👉 여러 앱 파일을 만들 때 export default function 으로 함수를 내보낼 수 있음<br/>
    
    - 데이터를 반복문 돌리기<br/>
    👉 'import data from (데이터 파일 경로);'를 입력하여 import 시킨 후 반복문 수행<br/>
    Tip❗️ : 가장 자주 사용되는 조건문 -> 삼항 연산자 사용(변수 = (조건) ? (참) : (거짓))<br/><br/><br/>
    
 ## 3주차(~2021.8.1)
- <h3><b>2021.7.31 3주차 수강 완료✔</b></h3>
- <h3>공부한 내용</h3>
  <h4>앱에 본격적으로 기능 구성 및 추가해보기!</h4>
  1. 앱 개발을 위한 필수 리액트 기초 공부<br/>
  2. 앱 다운 앱을 위한 기능 적용<br/>
  3. 앱 상의 페이지 구성<br/><br/>
  
  > 앱 개발을 위한 필수 리액트 기초 공부<br/>
  - 컴포넌트(Component) : UI의 요소, 요소를 재사용 가능한 부분으로 조각내서 운영하는 기법 / 즉, 화면의 모든 부분<br/>
  👉 App.js의 큰 App 함수처럼 코드 전체를 감싸고 있는 함수! 따라서 App.js를 App 컴포넌트라고 부름<br/>
  
  - 속성(Props) : 컴포넌트에 데이터를 전달하는 것이며 이 때 전달하는 형태는 <strong>'Key' & 'Value'</strong><br/>
  👉 규칙1. 컴포넌트에 속성(데이터)을 부여해줘서 전달할땐, <strong>키와 벨류(content={content})</strong> 형태로 전달해줘야 할 것<br/>
  👉 규칙2. 컴포넌트를 반복문 돌릴땐, 컴포넌트마다 고유하다는 것을 표현하기 위해 map에서 나오는 인덱스(i)를 <strong>'key = {i}</strong> 속성 전달 형태로 꼭 넣을것<br/>
  
  - 상태(useState) & useEffect : 컴포넌트에서 보유/관리 되는 데이터<br/>
  👉 리액트에서 상태(state)는 <strong>'useState'</strong>로 생성 / <strong>'setState'</strong> 함수로 변경<br/> 
  👉 useState : 리액트에서는 상태(state)로 관리되는 데이터가 변경되면 화면이 바뀜<br/>
  👉 useEffect : 화면이 그려진다음 가장 먼저 실행되는 함수, 매우 간단하고 유용하게 쓰이는 리액트 기본 제공 함수<br/>
  ``` javascript
  useEffect(()=>{
	...화면이 그려진 다음 가장 먼저 실행되야 할 코드 작성 공간
  },[])
  ```
  
  <br/><br/>
  
  > 앱 다운 앱을 위한 기능 적용<br/>
  - <h4>컴포넌트와 상태를 이용한 로딩화면 만들기</h4>
  ``` javascript
  export default function MainPage() {
    console.disableYellowBox = true;

    const [state,setState] = useState([])
    const [ready,setReady] = useState(true) // 로딩화면 기능 만들기

    useEffect(()=>{ 
      //1초 뒤에 실행되는 코드들이 담겨 있는 함수
      setTimeout(()=>{
          setState(data)
          setReady(false)
      },1000)
    },[])

    // 초기 ready 상태값은 true -> ?(물음표) 바로 뒤에 값이 반환됨
    // useEffect로 인해 데이터가 준비 -> ready 값이 변경되면 :(콜론) 뒤의 값이 반환
    return ready ? <Loading/> :  (
      {/* 로딩화면 이후 화면에 나타낼 요소들 작성 */}
    );
  }
  
  1) ready 값이 true이므로 return 구문에서 ?(물음표) 바로 뒤의 Loading 컴포넌트가 화면에 그려짐
  2) 화면이 그려지고 난다음, 1초 이따가 상태값들이 채워지고 변경됨
  3) ready 상태 값이 false가 됨
  4) 상태값이 변경되었으므로 화면이 다시 그려짐
  5) ready 값이 false 이므로 return 구문에서 :(콜론) 뒤의 MainPage 컴포넌트가 화면에 그려짐
  ```
  
  <br/>
  
  - <h4>state를 이용한 카테고리 기능 넣기</h4>
  ``` javascript
  export default function MainPage() {
    console.disableYellowBox = true;
    //return 구문 밖에서는 슬래시 두개 방식으로 주석

    //기존 꿀팁을 저장하고 있을 상태
    const [state,setState] = useState([])
    //카테고리에 따라 다른 꿀팁을 그때그때 저장관리할 상태
    const [cateState,setCateState] = useState([])
    const [ready,setReady] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
          //꿀팁 데이터로 모두 초기화
          let tip = data.tip;
          setState(tip)
          setCateState(tip)
          setReady(false)
      },1000)
    },[])

    const category = (cate) => {
        if(cate == "전체보기"){
            //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
            setCateState(state)
        }
        else{
            setCateState(state.filter((d)=>{
                return d.category == cate
            }))
        }
    }

    return ready ? <Loading/> :  (
      {/* 로딩화면 이후 화면에 나타낼 요소들 작성 */}
    );
  }
  ```
  
  <br/>
  
  - <h4>앱 상태 바(Status Bar) 관리</h4>
  ```
  - Expo 상태 바 설치 -
  expo install expo-status-bar
  ```
  ``` javascript
  - StatusBar 기능 적용 -
  import { StatusBar } from 'expo-status-bar'; 코드 추가
  return문 안에 <StatusBar style="black" /> 코드 추가
  
  ※ style 옵션으로 "black" 또는 "white" 적용 가능
  ```
  
  <br/>
  
  - <h4>페이지 내용 공유하기</h4>
  ``` javascript
  import { Share } from "react-native"; 코드 추가
  
  - export default function 내에 아래의 코드 추가 -
  1. share 상수 만들기
  const share = () => {
      Share.share({
          message:`${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
      });
  }
  2. 버튼 달기
  <View>
    <TouchableOpacity style={styles.button} onPress={()=>share()}><Text style={styles.buttonText}>팁 공유하기</Text></TouchableOpacity>
  </View>
  ```
  
  <br/>
  
  - <h4>외부 링크 클릭 이벤트</h4>
  ```
  - Expo linking 설치 -
  expo install expo-linking
  ```
  ``` javascript
  import * as Linking from 'expo-linking'; 코드 추가
  
  - export default function 내에 아래의 코드 추가 -
  1. 링크 상수 추가
  const link = () => {
        Linking.openURL("URL링크")
  }
  2. 버튼 달기
  <View>
    <TouchableOpacity style={styles.button} onPress={()=>link()}><Text style={styles.buttonText}>외부 링크</Text></TouchableOpacity>
  </View>
  ```
  
  <br/><br/>
  
  > 앱 상의 페이지 구성<br/>
  - 네비게이션<br/>
  👉 앱에 페이지 개념을 입혀줌<br/>
  👉 앱에서 만든 컴포넌트들을 페이지화<br/>
  👉 해당 페이지끼리 이동을 가능하게 해주는 라이브러리<br/>
  
  ```
  - 네비게이션 설치 -
  yarn add @react-navigation/native
  ```
  ```
  - 네비게이션 추가 설치 -
  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
  ```
  
  <br/>
  
  - 스택 네비게이션<br/>
  👉 컴포넌트에 페이지 기능을 부여<br/>
  👉 컴포넌트에서 컴포넌트로 이동, 즉 페이지 이동을 가능하게 해줌<br/>
  👉 페이지는 <strong>'Stack.Screen'</strong>, 책갈피는 <strong>'Stack.Navigator'</strong> 라 부름<br/><br/>
  ```
  - createStackNavigator 설치 -
  yarn add @react-navigation/stack
  ```
  ``` javascript
  - StackNavigator 적용 -
  import React from 'react';
  import { createStackNavigator } from '@react-navigation/stack'; //설치한 스택 네비게이션 라이브러리 import

  //페이지로 만든 컴포넌트들 불러오기
  import DetailPage from '../pages/DetailPage';
  import MainPage from '../pages/MainPage';

  // 상단에 선언 및 시작하는 것이 규칙!
  const Stack = createStackNavigator(); // StackNavigation 객체 사용

  const StackNavigator = () =>{
      return (
          //Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨져 있음
          <Stack.Navigator //네비게이터 태그 선언
              screenOptions={{
                  headerStyle: {
                      backgroundColor: "black",
                      borderBottomColor: "black",
                      shadowColor: "black",
                      height:100
                  },
                  headerTintColor: "#FFFFFF",
                  headerBackTitleVisible: false
              }}
          >
              {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣기 -> 페이지 기능 수행 */}
              <Stack.Screen name="MainPage" component={MainPage}/>
              <Stack.Screen name="DetailPage" component={DetailPage}/>
          </Stack.Navigator>
      )
  }
  export default StackNavigator;
  ```
  
  <br/><br/>
  
   ## 4주차(~2021.8.8)
- <h3><b>2021.8.3 4주차 수강 완료✔</b></h3>
- <h3>공부한 내용</h3>
  <h4>서버에 대한 이해와 구성</h4>
  1. 앱과 서버에 대한 이해<br/>
  2. 서버리스에 대한 이해<br/>
  3. 파이어베이스를 이용한 서버 구성<br/><br/>
  
  > 앱과 서버에 대한 이해<br/>
  - 앱과 서버의 동작 방식<br/>
  👉 서버가 정한 규칙에 따라 대화 <strong>요청(Request) & 응답(Response)</strong><br/>
  👉 서버 쪽에서 정한 규칙 : <strong>API(Application Programming Interface)</strong><br/>
  👉 서버가 정한 규칙의 형태
  ``` javascript
  1. 서버가 제공하는 도메인 형태
  www.sparta.com/getdata ←- 데이터 조회 API
  www.sparta.com/setData ←- 데이터 저장 API
  
  2. 서버가 만들어놓은 함수 형태
  db.ref('/like/').on('value') ←- 데이터 조회 API
  db.ref('/like/').set(new_like); ←- 데이터 저장 API
  ```
  
  <br/>
  
  - 리액트 네이티브에서 데이터를 준비하는 시점<br/>
  👉 1) 앱 화면이 그려진 다음 데이터를 준비 -> useEffect 사용<br/>
  👉 2) 앱에서 사용자가 저장 버튼을 누른 후<br/><br/>
  
  - 날씨 서버 외부 API - 휴대폰 위치 가져오기<br/>
  👉 순서 진행<br/>
  👉 1) 현재 위치(좌표) 데이터 가져오기<br/>
  👉 2) 위치 데이터를 이용해 현재 위치 날씨 데이터 가져오기
  ```
  - 앱 위치 정보 권한 제공 도구 설치 - 
  expo install expo-location
  ```
  ``` javascript
  import * as Location from "expo-location"; 코드 추가
  
  - export default function 내에 아래의 코드 추가 -
  const getLocation = async () => {
    // 수많은 로직중에 에러가 발생하면
    // 해당 에러를 포착하여 logic을 멈추고, 에러를 해결하기 위한 catch 영역 로직이 실행
    try {
      // 자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
      await Location.requestPermissionsAsync();
      const locationData= await Location.getCurrentPositionAsync();
      console.log(locationData)

    } catch (error) {
      Alert.alert("위치를 찾을 수가 없습니다.", "앱을 다시 실행할까요?");
    }
  }
  ```
  
  <br/>
  
  - 날씨 서버 외부 API - API 적용
  ```
  - API를 사용하기 위한 axios 설치 -
  yarn add axios
  ```
  ``` javascript
  import axios from "axios" 코드 추가
  
  - export default function 내에 아래의 코드 추가 -
  const getLocation = async () => {
    try {
      // 자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
      await Location.requestPermissionsAsync();
      const locationData= await Location.getCurrentPositionAsync();
      const latitude = locationData['coords']['latitude']
      const longitude = locationData['coords']['longitude']
      const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      console.log(result)
    } 
    catch (error) {
      // 위치를 못가져올 경우 해당 내용 출력
      Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
    }
  }
  ```
  
  <br/><br/>
 
  > 서버리스에 대한 이해<br/>
  - 서버리스란<br/>
  👉 개발자가 서버를 관리할 필요 없이 애플리케이션을 빌드하고 실행할 수 있도록 하는 클라우드 네이티브 개발 모델<br/>
  👉 서버를 직접 구현 및 구성 할 필요없이 필요한 서버 기능을 제공하는 곳에서 서비스를 사용<br/><br/><br/><br/>

  > 파이어베이스를 이용한 서버 구성
  - 파이어베이스 프로젝트 생성<br/>
  👉 1. 파이어베이스 가입<br/>
  👉 2. 파이어베이스 프로젝트 생성<br/>
  👉 3. 사용 할 파이어베이스 서비스 활성화<br/><br/>

  - 파이어베이스를 앱에 연결하기<br/>
  👉 firebase 라이브러리 설치 및 연결
  ```
  - 파이어베이스를 이용할 수 있게 도와주는 expo 도구 설치 -
  expo install firebase
  ```
  ``` javascript
  - 앱에 파이어베이스 도구 설치 및 연결 -
  //import * as firebase from 'firebase/app';
  import firebase from 'firebase/app';

  // 사용할 파이어베이스 서비스 주석 해제
  //import "firebase/auth";
  import "firebase/database";
  //import "firebase/firestore";
  //import "firebase/functions";
  import "firebase/storage";

  // Initialize Firebase
  //파이어베이스 사이트에서 봤던 연결정보 가져오기
  const firebaseConfig = {
    apiKey: "AIzaSyBKG2xY91x23W8PF1231k5OUJ5o9kHSKYQeNWUw",
    authDomain: "프로젝트명.firebaseapp.com",
    databaseURL: "https://프로젝트명.firebaseio.com",
    projectId: "프로젝트명",
    storageBucket: "프로젝트명.appspot.com",
    messagingSenderId: "781790378482",
    appId: "1:78179037128482:web:ddbca5330779f67b947136b",
    measurementId: "G-3F5L9F3340Q3"
  };

  //파이어베이스 연결 오류 시 대비 코드
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export const firebase_db = firebase.database()
  ```

<br/>

  - 리얼타임 데이터베이스<br/>
  👉 리스트, 딕셔너리 구조, 즉 JSON  형태로 저장/관리되는 데이터베이스 서비스<br/>
  👉 이미지 저장 → 파일 저장소 스토리지 / JSON 데이터 → 리얼타임 데이터베이스<br/>
  👉 특정 데이터 읽기 및 쓰기 가능<br/>
  👉 데이터 가져오기 함수
  ``` javascript
  firebase_db.ref('/tip').once('value').then((snapshot) => {
   let tip = snapshot.val();
  })
  ```

<br/><br/>

   ## 5주차(~2021.8.15)
- <h3><b>2021.8.10 5주차 수강 완료✔</b></h3>   
- <h3>공부한 내용</h3>
  <h4>광고 앱 적용 및 배포!</h4>
  1. 수익형 앱 만들기<br/>
  2. 구글 광고, 애드몹 적용<br/>
  3. 배포하기<br/><br/>

  > 수익형 앱 만들기
  - 앱에서 수익을 내는 방법<br/>
  👉 앱 마켓에 유료앱 배포 수익 모델<br/>
  👉 앱 내 배너 광고 수익 모델<br/>
  👉 앱 콘텐츠 판매 수익 모델: 인 앱 결제<br/>
  👉 구독 수익 모델<br/>
  👉 앱 개발 용역 수익 모델<br/>
  👉 외부 브랜드 광고 수익 모델<br/><br/>
  
  - 배너 수익 방식<br/>
  👉 1. 배너 클릭<br/>
  👉 2. 배너 광고 시청<br/>
  👉 3. 배너 광고 사용자 참여<br/><br/><br/>
  
  > 구글 광고, 애드몹 적용<br/>
  - 애드몹 광고 유형<br/>
  👉 배너<br/>
  👉 전면<br/>
  👉 리워드<br/>
  👉 네이티브 고급 광고<br/><br/>
  
  - 애드몹 가입 및 설정
  ```
  - 앱에 애드몹 설치 -
  expo install expo-ads-admob
  ```
  ``` json
  - app.json 하단에 추가 -
  "ios": {
      "supportsTablet": true,
      "buildNumber": "1.0.0",
      "bundleIdentifier": "com.패키지명",
      "config": {
        "googleMobileAdsAppId": ""
      }
    },
    "android": {
          "package": "com.패키지명",
          "versionCode": 1,
          "config": {
            "googleMobileAdsAppId": ""
          }
  },
  ```
  
  <br/>
  
  > 배포하기
  - 앱 배포를 위한 필요한 것<br/>
  👉 1) 앱 로고<br/>
  👉 2) 스플래시 스크린(앱 시작 초기 화면)<br/>
  👉 3) 앱 마켓에 올릴 설명 이미지<br/><br/>
  
  - 스플래시 스크린<br/>
  👉 온라인 포토샵 이용(https://pixlr.com/kr/x/)
  ``` json
  - 다른 이름을 사용하고 싶을 때 조정하는 부분(app.json의 일부분) -
  {
  "expo": {
    "name": "이름",
    "slug": "이름",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    }
  }
  ```
  
  <br/>
  
  - 로고<br/>
  👉 온라인 포토샵 이용(https://pixlr.com/kr/x/) <br/>
  👉 icon.png 부분을 원하는 이미지로 변경하여 저장해주면 끝!<br/>
  👉 이후, Expo 클라이언트 앱 종료 -> expo start로 재실행 -> 적용완료!<br/>
  
  - 배포 진행 순서<br/>
  👉 1) Expo를 통한 최종 앱 파일 생성<br/>
  👉 2) 구글 플레이 개발자 라이센스 가입 및 구입<br/>
  👉 3) 구글 플레이 스토어에 앱 배포<br/><br/>
  
  - Expo를 통한 최종 앱 파일 생성
  👉 apk 파일을 선택<br/>
  👉 부여 받은 url로 들어가 앱 소개 페이지 확인<br/><br/>
  ```
  - 안드로이드 앱 빌드(생성) 명령어 및 확인 -
  expo build:android
  ```
  
  - 구글 플레이 개발자 라이센스 가입 및 구입<br/>
  👉 https://developer.android.com/distribute/console?hl=ko 해당 페이지에서 가입 및 구입 진행<br/><br/>
  
  - 구글 플레이 스토어에 앱 배포<br/>
  👉 아래의 링크에 따라 진행<br/>
  👉 https://github.com/Min-su-Jeong/Sparta_Coding_Club_Development_Log/files/6911218/default.pdf<br/><br/><br/>
  
  > 💡 꿀팁 : 리액트 네이티브 앱을 개발할 때 알고 있으면 유용한 디자인 도구들
  - NativeBase <br/>
  👉 수십 개의 크로스 플랫폼 컴포넌트를 제공하는 널리 사용되고 있는 React Native용 UI 컴포넌트 라이브러리<br/>
  👉 네이티브 서드파티 라이브러리를 기본적으로 사용가능<br/>
  👉 프로젝트 자체에 유용한 starter-kits 부터 customizable theme templates 까지 풍부한 생태계 구성<br/><br/>
  
  - React Native Element<br/>
  👉자바 스크립트로 제작 된 사용자 정의가 가능한 cross-platform UI toolkit<br/>
  👉특정 요소를 설정하는 데 필요한 상용구가 적지만 디자인을 완벽하게 제어가능<br/><br/>
  
  - Shoutem<br/>
  👉 UI 컴포넌트, 테마, 컴포넌트 애니메이션 세 부분으로 구성된 React Native UI Kit<br/>
  👉 크로스 플랫폼 컴포넌트 세트 제공<br/>
  👉 모든 컴포넌트는 구성 가능하고 사용자 정의 할 수 있도록 제작<br/><br/>
  
  - UI Kitten<br/>
  👉 사용자 정의 및 재사용이 가능한 react-native component kit를 제공<br/>
  👉 스타일 정의를 특정 위치로 이동시켜 컴포넌트를 재사용 및 단일방식으로 스타일화하는 컨셉에 기반<br/><br/>
 
  - React Native Material UI<br/>
  👉 라이브러리를 사용하여 Google’s material design을 구현하는 맞춤 설정할 수있는 UI 컴포넌트 세트<br/><br/>
  
  - React Native Material Kit<br/>
  👉 Google의 MD를 구현하는 기본적이지만 유용한 UI 컴포넌트 및 테마 제공<br/>
  👉 간단하고 유용하며 주변의 <strong>'노이즈'</strong>가 적음<br/><br/>
  
  - Nachos UI<br/>
  👉 30개 이상의 사용자 정의 가능한 컴포넌트가 있는 React Native 컴포넌트 라이브러리<br/><br/>
 
  - React Native UI Library<br/>
  👉 react-native-animatable과 react-native-blur을 지원하는 React native용 최신 UI toolset 및 컴포넌트 라이브러리<br/>
  👉 색상, 타이포그래피, 그림자, 테두리 반경 등 미리 정의 된 스타일 설정 제공<br/><br/>
  
  - React Native Paper<br/>
  👉 bundle-size를 줄이기위한 선택적인 babel-plugin과 글로벌 테마 지원<br/>
  👉 material design 가이드 라인을 따르는 크로스 플랫폼 UI 컴포넌트 라이브러리<br/><br/>

  - React Native Vector Icons<br/>
  👉 NavBar / TabBar / ToolbarAndroid, 이미지 소스 및 전체 스타일링을 지원하는 React Native용 맞춤형 아이콘 세트<br/>
  👉 사전 제작 된 번들 아이콘 세트가 제공되며, 여기 라이브러리의 모든 아이콘에 대한 전체 예제 제공<br/><br/>
  
  - Teaset<br/>
  👉 20개 이상의 순수JS(ES6) 컴포넌트와 반응하는 UI 라이브러리<br/><br/>
