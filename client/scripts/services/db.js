module.exports = function() {
  //return new Firebase('https://astralchai.firebaseio.com');
  return {
    child : function(){
      console.log('child called');
      return {
        child : function(){
          console.log('from db called');
          return {
            on : function(durp, cb){
              cb({
                val : function(){
                  return true;
                }
              });
              console.log('on called');
              return;
            }
          }
        }
      }
    },
    push : function(){}
  }; 
};
