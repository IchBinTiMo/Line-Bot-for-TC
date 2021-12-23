const machine = {
  current: "user",
  state: {
    user: {
      current: "user",
      goto:{
        state1: function(){
          return this.goToState_1();
        }, 
        state2: function() {
          return this.goToState_2();
        }
      }      
    },
    state1: {
      current: "state_1",
      goto: {
        user: function() {
          return this.goToUser();
        }
      },      
    },
    state2: {
      current: "state_2",
      goto: {
        user: function() {
          return this.goToUser();
        }
      }      
    }
  },
  goToUser(){
    let message = "Trigger user\nSelect state1 or state2";
    this.changeState("user");
    return message;
    
  },
  goToState_1(){
    let message = "Trigger state1";
    this.changeState("state1");
    return message;
  },

  goToState_2(){
    let message = "Trigger state2";
    this.changeState("state2");
    return message;
  },

  changeState(newState){
    this.current = newState;
  }
}



module.exports = {machine};