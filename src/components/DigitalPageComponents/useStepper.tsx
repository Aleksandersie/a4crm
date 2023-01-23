


const useStepper = (numberOfCopy:number)=>{
    //const razor = 100
    console.log('number is ' + numberOfCopy);
    

   
  
    
    const priceHandler = function(numberOfCopy){
        switch (numberOfCopy) {
            case 1:
              return 1111
              break;
            case 2:
                return 2222
              break;
            case 3:
              alert( 'Перебор' );
              break;
            default:
              console.log( "Нет таких значений" );
          }
    }
    console.log(priceHandler(numberOfCopy));
    

   
    
    return {priceHandler}
} 

export default useStepper