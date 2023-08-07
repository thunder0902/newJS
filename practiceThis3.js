//this 연습문제 3
//버튼을 누르면 1초후에 버튼이에요가 나오게하기



document.getElementById('a').addEventListener('click', function(e){
    var btn = this;
    setTimeout(function(){console.log(btn.innerHTML)},1000)
});
