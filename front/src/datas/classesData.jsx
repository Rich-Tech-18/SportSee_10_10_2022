/**
 * A class representing the sort data for all type of chart
 *
 * @property {Object} data - The data fetch from the API
 */

export class dataSort {
    constructor(data){
      this.data = data
    }

  /**
 * Function that returns a array for the bar Charts
 *
 * @return {Object} Return the object for sorted barchart
 */

    barCharts(){
      /**
       * @type {Array<object>}
       */
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

/**
 * Function that returns a array for the line Charts
 *
 * @return {Object} Return the object for sorted lineCharts
 */

    lineCharts(){
      /**
       * @type {Array<object>}
       */
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


/**
 * Function that returns a array for the radar Charts
 *
 * @return {Object} Return the object for sorted radarCharts
 */

    radarCharts(){
      /**
       * @type {Array<object>}
       */
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

/**
 * Function that returns a array for the radial barCharts
 *
 * @return {Object} Return the object for sorted radialBarcharts
 */
  
    radialBarCharts(){
      /**
       * @type {Array<object>}
       */
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


/**
 * A class representing the information of the user
 *
 * @property {Object} name - The data fetch from the API
 */

  export class user {
    constructor(name){
      this.name = name
    }
/**
 * Function that returns the user's name
 *
 * @return {Object} Return the user's name in a array
 */

    getName(){
      return this.name;
    }
      
    
  }

/**
 * A class representing the number for the nutriment selected
 *
 * @property {Object} nutriments - The data fetch from the API
 */

  export class dataNutriments {
    constructor(nutriments){
      this.nutriments = nutriments
    }

  /**
 * Function that returns the nutriment selected
 *
 * @return {string} Return the number of nutriment in a string format
 */

    getDataNutriments(){
      return new Intl.NumberFormat("en-IN").format(this.nutriments)
    }
  }