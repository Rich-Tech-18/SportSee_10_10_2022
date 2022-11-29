import axios from 'axios';
// const dataMocked = require('../datas/mockedDatas.json');


/**
 * Fetch the first name data of a user from API
 * @param {string} idUser
 * @returns Object
 */

 export const getFirstName = async (idUser) => {
    let firstName = [];
    await axios.get(`http://localhost:3000/user/${idUser}`)
    .then(response => {
        firstName.push(response.data.data.userInfos.firstName);
    }).catch((error) => {
        // dataMocked.USER_MAIN_DATA.map(element => {
        //     if(element.id === idUser){
        //         return firstName.push(element.userInfos.firstName)
        //     }
        //     return null;
        // });
        console.log(error)
        if(firstName.length === 0){
            const divDisplay = document.querySelector('.containerDashboard');
            const classContainer = document.querySelectorAll(".container");
            classContainer.forEach(element => {
                element.style.display = "none";
            })
            divDisplay.style.gridTemplate = '"aside error error error error"';
            divDisplay.style.gridTemplateColumns = "8.25vw 1fr 1fr 1fr 1fr";
            const divError = document.createElement("div");
            divError.classList.add("errorMessage");
            divError.textContent = "erreur de connexion à l'API"
            divDisplay.appendChild(divError);
            return divDisplay
            // return firstName.push(error.message)
        }
    })
    return firstName;
}

/**
 * Fetch the objectif score data of a user from API
 * @param {string} idUser
 * @returns Object
 */

export const getObjectifScore = async (idUser) => {
    let objectifScore = [];
    await axios.get(`http://localhost:3000/user/${idUser}`)
    .then(response => {
        objectifScore.push(response.data.data.score);
    }).catch((error) => {
        // console.log(error);
        // dataMocked.USER_MAIN_DATA.map(element => {
        //     if(element.id === idUser){
        //         return objectifScore.push(element.todayScore);
        //     }
        //     return null;
        // })
        if(objectifScore.length === 0){
            objectifScore.push(0);
        }
    })
    return objectifScore;
}



/**
 * Fetch the information data of a user from API
 * @param {string} idUser
 * @returns Object
 */

 export const getInfo = async (idUser) => {
    let info = [];
    await axios.get(`http://localhost:3000/user/${idUser}`)
    .then(response => {
        info.push(response.data.data);
    }).catch((error) => {
        // console.log(error);
        // info.push(error.response.statusText)
        // dataMocked.USER_MAIN_DATA.map(element => {
        //     if(element.id === idUser){
        //         return info.push(element);
        //     }
        //     return null;
        // })
    })
    return info;
}


/**
 * Fetch the calories count of a user from API
 * @param {string} idUser
 * @returns Object
 */

 export const getCaloriesCount = async (idUser) => {
    let caloriesCountData = [];
    await axios.get(`http://localhost:3000/user/${idUser}`)
    .then(response => {
        caloriesCountData.push(response.data.data.keyData.calorieCount);
    }).catch((error) => {
        // console.log(error);
        // dataMocked.USER_MAIN_DATA.map(element => {

        //     if(element.id === idUser){
        //         return caloriesCountData.push(element.keyData.calorieCount);
        //     }
        //     return null;
        // })
        // if(caloriesCountData.length === 0){
        //     caloriesCountData.push(0);
        // }
    })
    return caloriesCountData;
}

/**
 * Fetch the protein count of a user from API
 * @param {string} idUser
 * @returns Object
 */

 export const getProteinCount = async (idUser) => {
    let proteinCountData = [];
    await axios.get(`http://localhost:3000/user/${idUser}`)
    .then(response => {
        proteinCountData.push(response.data.data.keyData.proteinCount);
    }).catch((error) => {
        // console.log(error);
        // dataMocked.USER_MAIN_DATA.map(element => {

        //     if(element.id === idUser){
        //         return proteinCountData.push(element.keyData.proteinCount);
        //     }
        //     return null;
        // })
        if(proteinCountData.length === 0){
            proteinCountData.push(0);
        }
    })
    return proteinCountData;
}

/**
 * Fetch the carbohydrate count of a user from API
 * @param {string} idUser
 * @returns Object
 */

 export const getCarbohydrateCount = async (idUser) => {
    let carbohydrateCountData = [];
    await axios.get(`http://localhost:3000/user/${idUser}`)
    .then(response => {
        carbohydrateCountData.push(response.data.data.keyData.carbohydrateCount);
    }).catch((error) => {
        // console.log(error);
        // dataMocked.USER_MAIN_DATA.map(element => {

        //     if(element.id === idUser){
        //         return carbohydrateCountData.push(element.keyData.carbohydrateCount);
        //     }
        //     return null;
        // })
        if(carbohydrateCountData.length === 0){
            carbohydrateCountData.push(0);
        }
    })
    return carbohydrateCountData;
}

/**
 * Fetch the lipid count of a user from API
 * @param {string} idUser
 * @returns Object
 */

 export const getLipidCount = async (idUser) => {
    let lipidCountData = [];
    await axios.get(`http://localhost:3000/user/${idUser}`)
    .then(response => {
        lipidCountData.push(response.data.data.keyData.lipidCount);
    }).catch((error) => {
        // console.log(error);
        // dataMocked.USER_MAIN_DATA.map(element => {

        //     if(element.id === idUser){
        //         return lipidCountData.push(element.keyData.lipidCount);
        //     }
        //     return null;
        // })
        if(lipidCountData.length === 0){
            lipidCountData.push(0);
        }
    })
    return lipidCountData;
}

/**
 * Fetch the activity of a user from API
 * @param {string} idUser
 * @returns Object
 */

 export const getActivity = async (idUser) => {
    let getActivity = [];
    await axios.get(`http://localhost:3000/user/${idUser}/activity`)
    .then(response => {
        getActivity.push(response.data.data.sessions);
    }).catch((error) => {
        // console.log(error);
        
        // dataMocked.USER_ACTIVITY.map(element => {
        //     if(element.userId === idUser){
        //         return getActivity.push(element.sessions);
        //     }
        //     return null;
        // })
        if(getActivity.length === 0){
            getActivity.push([{day: 0, kilogram: 0, calories: 0}]);
        }
         
    })
    
    return getActivity;
}


/**
 * Fetch the activity of a user from API
 * @param {string} idUser
 * @returns Object
 */

 export const getAverageSessions = async (idUser) => {
    let getAverageSessions = [];
    await axios.get(`http://localhost:3000/user/${idUser}/average-sessions`)
    .then(response => {
        getAverageSessions.push(response.data.data.sessions);
    }).catch((error) => {
        // console.log(error)
        // dataMocked.USER_AVERAGE_SESSIONS.map(element => {

        //     if(element.userId === idUser){
        //         return getAverageSessions.push(element.sessions);
        //     }
        //     return null;
        // })
    })
    return getAverageSessions;
}

/**
 * Fetch the activity of a user from API
 * @param {string} idUser
 * @returns Object
 */

 export const getPerformance = async (idUser) => {
    let getPerformance = [];
    await axios.get(`http://localhost:3000/user/${idUser}/performance`)
    .then(response => {
        getPerformance.push(response.data.data);
    }).catch((error) => {
        // console.log(error);
        // getPerformance.push(error.response.statusText)
        // dataMocked.USER_PERFORMANCE.map(element => {
        //     if(element.userId === idUser){
        //         return getPerformance.push(element);
        //     }
        //     return null;
        // })
    })
    return getPerformance;
}


