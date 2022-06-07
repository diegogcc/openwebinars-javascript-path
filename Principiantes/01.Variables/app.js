 //Variables globales
 const global_var = "Global"
 console.log(global_var)
 
 //Variables locales
 if(true){
     const local_var = "Local";
     console.log('Local variable from inside scope');
 }
 console.log('Local variable from outside scope');
 //console.log(local_var);                  //! Uncaught ReferenceError: local_var is not defined
 
 //var
 console.log(undefinedVariable);
 var undefinedVariable = "tipo VAR puede definirse DESPUÉS de ser utilizadas";
 //let
 //console.log(definedVariable);           //! Uncaught ReferenceError: Cannot access 'Defined' before initialization
 let definedVariable = "tipo LET solo puede usarse si ya se ha definido"
 console.log(ðefinedVariable)
 //const
 const CONSTANT_VARIABLE = "esto no va a cambiar de valor";
 //CONSTANT_VARIABLE = "Intentando cambiar de"     //! Uncaught TypeError: Assignment to constant variable