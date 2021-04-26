
(function (window) {

  var helloSpeaker = {

    "greeting": ["GOOD MORNING_1", "GOOD MORNING_2", "GOOD MORNING_3"],



    newObject : {
      pick : function () {
        return 0;
      }
    }

  };
  var greeting = "Hello------";


  helloSpeaker.speak = function (name) {
    // console.log(greeting + " " + helloSpeaker.name);
    // console.log(this.greeting[this.newObject.pick()] + " " + p1 ? "": "");
    console.log(this.greeting[this.newObject.pick()] + " " + name.name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);