// 이메일 판별하기

// indexOf 해결하기
function checkEmail(email) {
    if(email.indexOf('@') < 0) {
        console.log("이메일이 아닙니다");
    }
    else {
        console.log("이메일이 맞습니다");
    }
}

checkEmail('minsu@gmail.com') // 이메일이 맞습니다
checkEmail('minsu$gmail.com') // 이메일이 아닙니다.

// 정규식으로 해결하기
function checkEmail(email) {
    var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(!emailRule.test(email)) {
        console.log("이메일이 아닙니다");
    }
    else {
        console.log("이메일이 맞습니다");
    }
}

checkEmail("minsu@gmail.com");
checkEmail("minsu#gmail.com");