function primeNumb(num) {
    let result;
      if (num > 1000 ){
         result =" данные неверны"
       console.log(result);
    }
      else if (num > 1) {
        for (let i = 2; i < num; i++) {
          if (num % i == 0) {
            result = (`${num} Составное число`);
            console.log(result);
            return;
          }
        }
        result=(`${num} Простое число`);
        console.log(result);
        return;
      } else {
        console.log("Число должно быть больше 1");
      }
    }
    
    primeNumb(1002);