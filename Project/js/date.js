//자릿수를 맞추기 위한 함수
function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  }

// 주중, 토요일, 일요일 체크해주는 함수
function checkyoyil(fulldate){ 
    yoil=fulldate.getDay()*1 //토요일에는 0, 일요일에는 1, 월-금에는 2-6반환
    if (yoil== 0){
        return 1;
    } else if(yoil== 1){
        return 2;
    } else{
        return 0;
    }
}

const datelist=[];
const weekdayorend=[]; // 주중이면 0, 토요일이면 1, 일요일이면 2
let fulldate
const daylist=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

for(let yy=2020;yy<2021;yy++){
    for(let mm=1;mm<=12;mm++){
        for(let dd=1;dd<=daylist[mm-1];dd++){
            fulldate = new Date(yy,mm-1,dd+1);
            const date6 = (yy+"").slice(2)+pad(mm+"",2)+pad(dd+"",2);
            datelist.push(date6);     
            //console.log(date6)
            weekdayorend.push(checkyoyil(fulldate))

        }
        //윤년 2월 29일 예외처리
        if (fulldate.getFullYear()*1%4==0 && mm==2){
            datelist.push((yy+"").slice(2)+'0229')
            let yoondate = new Date(fulldate.getFullYear(), mm-1, 30)
            weekdayorend.push(checkyoyil(yoondate))
            //console.log(yoondate, checkyoyil(yoondate))
        }
    }
}
console.log(datelist)

