function random(){ // 번호 생성
    var lottoArr = []; // 사용자 로또 번호 생성할 Array

    while(lottoArr.length < 7){ 
        var num =  Math.floor(Math.random()*(45)) + 1; // 1~45 숫자 랜덤 생성

        if(lottoArr.indexOf(num) == -1){ // 중복아니면 추가
            lottoArr[lottoArr.length] = num;
        }
    } return lottoArr; // while문 close & Loop 실행 후 Return
} // function random close

// Compare
function compare(user, superl){
    var bonusFlag = false;
    var pickCnt=0;

    for(var idx=0; idx < 6; idx++){
        if(user.indexOf(superl[idx])!=-1){
            if(user.indexOf(superl[idx]) == 6){
                bonusFlag = true;
            } else{
                pickCnt++;
            }
        }
    }
    return [pickCnt,bonusFlag];
}

// 출력
function print(){ // function print open > Line 33-100

    /* =- 순서 -=
    1. 구매 (자동화)
    2. 당첨번호 생성
    3. 비교
    4. 결과 발표
    */

    // 1. 사용자 로또번호 구매
    var lottoBuyNumArray = random();

    console.log("구매하신 로또 번호는 " +
                lottoBuyNumArray[0] + ","+
                lottoBuyNumArray[1] + ","+
                lottoBuyNumArray[2] + ","+
                lottoBuyNumArray[3] + ","+
                lottoBuyNumArray[4] + "," +
                lottoBuyNumArray[5] + " 입니다.");
                console.log("");
        
    // 2. 당첨번호 생성 + 저장
    var lottoStorage= random();

    console.log("1등 로또 번호는 " +
                lottoStorage[0] + "," +
                lottoStorage[1] + "," +
                lottoStorage[2] + "," +
                lottoStorage[3] + "," +
                lottoStorage[4] + "," +
                lottoStorage[5] +
                " 보너스 번호는 " + lottoStorage[6] + " 입니다.");
                console.log("");

    // 비교 결과값 받기
    var result = compare(lottoBuyNumArray,lottoStorage);

    // 결과 발표
    console.log("동일 개수 :: " + result[0] +" :: 보너스 체크 :: " + result[1]);

    if(result[0] == 6){ // if open
        console.log("1등입니다!!!!! 축하드립니다^^");
        console.log("");
    } // if close

    else if(result[0] == 5){ // else if open
        if(result[1]){ // if open
            console.log("2등입니다!!!!! 축하드립니다^^");
            console.log("");
        } // if close

        else{ // else open
            console.log("3등입니다!!!!! 축하드립니다^^");
            console.log("");
        } // else close
    } // else if close

    else if(result[0] == 4){ // else if open
        console.log("4등입니다!!!!! 축하드립니다^^");
        console.log("");
    } // else if close

    else{ // else open
        console.log("꽝!!!!! 아쉽지만 다음 기회에...");
        console.log("");
    } // else close

} // function print close > Line 33-100

print();