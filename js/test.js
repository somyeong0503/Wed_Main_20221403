var jb = 'hi'; // 변수 선언 후 주석 가능(한줄 주석)
var a = 1;
var b;
b = 5;
function session_del() { // 세션 삭제
    if(sessionStorage) {
        sessionStorage.removeItem("Session_Storage_id");
        sessionStorage.removeItem("Session_Storage_pass");
        alert('5분 초과로 자동 로그아웃');
        location.href='../index.html'
    } 
}
 setTimeout(session_del,300000);
/*
여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
*/

if (true) {
let c = 'let 접근';
var c_1 = 'var 접근';
}
//console.log(c); // Error?
console.log(c_1);
let d = 5;
//let d = '값 재할당'; // Error?
console.log(d);
const e = '상수1 접근';
//e = 5;
//const f // Error?
console.log(e);

//function search_message(){
//alert("검색을 수행합니다!");
//}

const search_message = () => {
const c = '검색을 수행합니다';
alert(c);
};

document.getElementById("search_btn").addEventListener('click', search_message);