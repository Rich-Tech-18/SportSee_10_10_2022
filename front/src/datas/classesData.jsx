export class dataSort {
    constructor(data){
      this.data = data
    }

    barCharts(){
        let element = [];
        this.data.map(elem => {
          return elem.map((el, index) => {
             return element = [
              ...element,
              {
                name : index + 1,
                kg : el.kilogram,
                Kcal : el.calories
              }
            ]
          })
        })
        return element;
    }

    lineCharts(){
        let arr = [];
        const sessions = this.data.map(elem => elem.map(el => el.sessionLength));
        if (this.data.length === 0){
            arr = [
                {
                    day : "",
                    min : 0
                } 
                
            ];
        }else{
            arr = [
            {
                day : "L",
                min : sessions[0][0]
            },
            {
                day : "M",
                min : sessions[0][1]
            },
            {
                day : "M",
                min : sessions[0][2]
            },
            {
                day : "J",
                min : sessions[0][3]
            },
            {
                day : "V",
                min : sessions[0][4]
            },
            {
                day : "S",
                min : sessions[0][5]
            },
            {
                day : "D",
                min : sessions[0][6]
            }
        ]; 
        }
       
        return arr;
    }

    radarCharts(){
    let items = []
       if (this.data.length === 0){
        items = [

            {
              subject : "",
              performance : 0
            }
          ];
       }else {
        items = [

            {
              subject : "Intensité",
              performance : this.data[0].data[5].value
            },
            {
              subject : "Vitesse",
              performance : this.data[0].data[4].value
            },
            {
              subject : "Force",
              performance : this.data[0].data[3].value
            },
            {
              subject : "Endurance",
              performance : this.data[0].data[2].value
            },
            {
              subject : "Energie",
              performance : this.data[0].data[1].value
            },
            {
              subject : "Cardio",
              performance : this.data[0].data[0].value
            }
          ];
       }
        
        return items;
    }
  
    radialBarCharts(){
      let arr = [];
      this.data.forEach(element => {
        if(element.todayScore === undefined){
          arr = [{
            name : "objectif",
            score : element.score,
            fill : "#E60000",
        }];
      }
        else{
          arr = [{
            name : "objectif",
            score : element.todayScore,
            fill : "#E60000",
        }];
      }
      });
      const newArr = [
        ...arr,
        {
        
          name : "objectif",
          score : 1,
          fill : "#FBFBFB",
        }
      ]
      return newArr
    }
  }


  export class getUserName {
    constructor(name){
      this.name = name
    }

    getName(){
      return this.name;
    }
      
    
  }



  export class getNutriments {
    constructor(nutriments){
      this.nutriments = nutriments
    }

    getNutriments(){
      return new Intl.NumberFormat("en-IN").format(this.nutriments)
    }
  }