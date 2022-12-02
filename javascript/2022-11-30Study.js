//alert, prompt 써보기.
alert("이름과 나이를 입력해주세요!");
var name = prompt("이름");
var age = prompt("나이");
alert("(" +  age +") " + " 안녕하세요 " + name + " 님.");

// 디폴트값 확인
prompt("호주의 대표적인 동물은?", "캥으로시작");

// confirm 써보기
var cc = confirm("정말로 취소하시겠습니까?");
if(cc==true){
   console.log('취소 되었습니다.');
 } else {
   console.log('계속 진행합니다.');
 }