// # 題目
// [949. Largest Time for Given Digits](https://leetcode.com/problems/largest-time-for-given-digits/)

// # 思考過程
// 先想到高中的排列組合，四個空位置去排陣列內的四個item，由第一個位置（只能是0~2），第二個位置根據第一個位置有所不同。這樣想好麻煩啊...。放棄該做法。
// 換成以下想法：
// 原始陣列arr內有四個item，分為兩兩一組，代表小時（範圍是00~23）跟分鐘(範圍是00~59)。其中一組不符合範圍就回傳`""` 。
// 四個item中，先選兩個item出來，接著轉成數字排順序，成為第一組"小時"陣列，去挑00~23內最大的。超過的就不管了。
// 第一組陣列中，挑好最大的數字以後，arr剩下兩個item，轉成數字排順序，去挑00~59內最大的。去選第二組數字陣列當作"分鐘"陣列。
// 但可能第二組沒有得選。只好從第一組陣列中，往次要大的數字，去找出第二組數字陣列。直到找到為止，沒找到就回傳`""`。
// 要兩個範圍都符合，並組合成一串字回傳出去。


/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
    let output=''
    let firstTeam = new Set(); // for hours 兩兩數字一組 不重複
    // 處理第一組
    for(i=0;i<arr.length;i++){
        let firstNum = arr[i];
        for(j=0;j<arr.length;j++){
            let secondNum = arr[j];
            let firstTeamItem = firstNum.toString()+secondNum.toString();
            firstTeam.add( parseInt(firstTeamItem) );  
        }
    }
    
    // 整理firstTeam
    Array.from(firstTeam).forEach((item)=>{
        let copyArr = [...arr]
        let str =item.toString();
        if(str.length>1){
            if(copyArr.indexOf(parseInt(str.charAt(0)))!== -1 ){
               copyArr.splice(copyArr.indexOf(parseInt(str.charAt(0))),1);
                if(copyArr.indexOf(parseInt(str.charAt(1)))==-1){
                    firstTeam.delete(parseInt(str));
                }
            }
            else{
                firstTeam.delete(parseInt(str));
            }
        }
    })
    
    const hourArray = Array.from(firstTeam).filter(item=>item<24);
    if(hourArray.length==0) return output;
    let minuteArray = []
    // 處理第二組
    let copyArr=[...arr]
    let maxHour = '';
    // 從大到小
    hourArray.sort(function (a, b) {
        return b - a
    }); 
    hourArray.some((item)=>{
        minuteArray = findMatchedMinuteArray(arr,item.toString())
        if(minuteArray.length!==0) return maxHour=item.toString();
    })
    if(minuteArray.length==0) return output
    let maxMinute = Math.max(...minuteArray).toString();
    if(maxHour.length==1){maxHour='0'+maxHour}
    if(maxMinute.length==1){maxMinute='0'+maxMinute}; // 處理個位數
    output = `${maxHour}:${maxMinute}`;
    return output;
}

var findMatchedMinuteArray = function(arr,maxHour){
    let copyArr = [...arr];
    let secondTeam = new Set();
    if(maxHour.length==1){maxHour='0'+ maxHour}; // 處理個位數
    copyArr.splice(copyArr.indexOf(parseInt(maxHour.charAt(0))),1);
    copyArr.splice(copyArr.indexOf(parseInt(maxHour.charAt(1))),1);
    let firstRest = parseInt(copyArr[0].toString()+copyArr[1].toString())
    let secondRest = parseInt(copyArr[1].toString()+copyArr[0].toString())
    secondTeam.add(firstRest)
    secondTeam.add(secondRest)
    const minuteArray = Array.from(secondTeam).filter(item=>item<60);
    return minuteArray;
}
