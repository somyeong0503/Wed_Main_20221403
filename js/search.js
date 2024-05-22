const search_message = () => {
    const c = "검색을 수행합니다.";
    alert(c);
}

document.getElementById('search_button_msg').addEventListener('click', search_message);

function googleSearch() {
// 검색어 입력란의 값을 가져옵니다.
const searchTerm = document.getElementById("search_input").value.trim();

// 검색어 공백 검사
if (searchTerm.length === 0) {
alert("검색어를 입력해주세요.");
return false; // 함수 중단
}

// 비속어 배열
const badWords = ["나쁜단어1", "나쁜단어2", "나쁜단어3"];

// 비속어 검사
for (let i = 0; i < badWords.length; i++) {
if (searchTerm.includes(badWords[i])) {
alert("비속어가 포함된 검색입니다.");
return false; // 함수 중단
}
}

 // 검색어로 설정된 URL 생성
 const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;

// 새 창에서 구글 검색을 수행
// window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
window.location.href = googleSearchUrl;
return false; // 기본 동작 중단
}