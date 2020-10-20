// 1~45 Random 번호 생성 loop
function random(randIndex) {
    var createCount = [];

    for(var i=0; i<randIndex; i++) {
        createCount.push([]);

        for(var j=0; j<6; j++) {
            createCount[i].push(Math.floor(Math.random()*(45)) + 1)
        }
    }

    return createCount;
}

// 1등 당첨 로또번호 생성
function prizeLottery() {
    var result = [];

    for(var j=0; j<6; j++) {
        result.push(Math.floor(Math.random()*(45)) + 1)
    }

    return result;
}

// 고정값 설정 (Constant)
const createCount = random(6);
const lotteryResult = prizeLottery();

// 비교 (Compare)
function compare() {
for(var i=0; i<createCount.length; i++) {
    var currentCount = 0;
    for(var j=0; j<lotteryResult.length; j++) {
        if(createCount[i][j] == lotteryResult[j]) {
            currentCount += 1
        }
    }
    
    // 출력 (Print)
    console.log((i+1) + "번째 : " + "총 6개 중 , ★ " + currentCount + " 개 정답 ★");
}
}