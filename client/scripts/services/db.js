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



module.exports = function(PatientTemplate) {
  //return new Firebase('https://astralchai.firebaseio.com');
  var patients = {
    getAll : function(){
      console.log('here');
      return [PatientTemplate()];
    },
    child : function(){
      return {
        on : function(durp, cb){
          cb({
            val : function(){
              return PatientTemplate();
            }
          });
          return;
        }
      }
    }
  };

  return {
    child : function(name){
      return {
        'staff' : staff,
        'patients' : patients
      }[name];
    },
    push : function(){}
  }; 
};
