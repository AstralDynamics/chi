var staff = {
  child : function(){
    console.log('staff child');
    return {
      on : function(durp, cb){
        cb({
          val : function(){
            return {
              name : {
                firstname : 'Jim',
                surname : 'Davies'
              }
            };
          }
        });
        return;
      }
    }
  }
};

module.exports = function() {
  //return new Firebase('https://astralchai.firebaseio.com');
  return {
    child : function(name){
      return {
        'staff' : staff
      }[name];
    },
    push : function(){}
  }; 
};
