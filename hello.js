function main(){
          let narcNum = [];
          let h,t,o,total;
          for(let i = 100; i < 999; i++){
                    h = Math.floor(i / 100);
                    t = Math.floor((i % 100) / 10);
                    o = i % 10;
                    total = Math.pow(h,3) + Math.pow(t,3) + Math.pow(o,3);
                    if(total === i){
                              narcNum.push(i);
                    }
          }
          return narcNum;
}