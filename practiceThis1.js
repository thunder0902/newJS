//간단한 메소드 만들기
//this 연습문제1

var people = {
  name: "송흥민",
  out: function sayHi(){
    console.log("안녕 나는" + this.name);
  }
};

people.out();