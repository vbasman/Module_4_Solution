

(function (window) {


var byeSpeaker = {
  "name": "Mustafa"
};


var greeting = "Good Bye";


byeSpeaker.speak = function speak() {
  console.log(greeting + " " + byeSpeaker.name);
}

window.byeSpeaker = byeSpeaker;

})(window);