new Vue({
    el:'#app',
    
    data (){
      return {
          name:'Bitcoin',
          image:'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
          porcent:-10,
          prices:[8400, 7900, 8200, 9000, 9400, 0, 10200],
          pricesWithDays: [
            { day: 'Lunes', value: 8400 },
            { day: 'Martes', value: 7900 },
            { day: 'Miercoles', value: 8200 },
            { day: 'Jueves', value: 9000 },
            { day: 'Viernes', value: 9400 },
            { day: 'Sabado', value: 10000 },
            { day: 'Domingo', value: 10200 },
        ]
        }
    }
})


  

