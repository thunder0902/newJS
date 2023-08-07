//this 문제 2
//오브젝트 내의 데이터를 전부 더해주는 메소드 만들기


var ary = {
    data:[1,2,3,4,5],
}
ary.plus = function(){
    var num = 0;
    this.data.forEach(function(a){
        num = num + a;
    });
    console.log(num);
}
ary.plus()