import axios from 'axios';

/**
 * Fetch the first name data of a user from API
 * @param {Number} id
 * @returns Object
 */

 export const getFirstName = async (id) => {
    let firstName = [];
    await axios.get(`http://localhost:3000/user/${id}`)
    .then(response => {
        firstName.push(response.data.data.userInfos.firstName);
    }).catch((error) => {
        console.log(error);
    })
    return firstName;
}

/**
 * Fetch the objectif score data of a user from API
 * @param {Number} id
 * @returns Object
 */

export const getObjectifScore = async (id) => {
    let objectifScore = [];
    await axios.get(`http://localhost:3000/user/${id}`)
    .then(response => {
        objectifScore.push(response.data.data.score);
    }).catch((error) => {
        console.log(error);
    })
    return objectifScore;
}



/**
 * Fetch the information data of a user from API
 * @param {Number} id
 * @returns Object
 */

 export const getInfo = async (id) => {
    let info = [];
    await axios.get(`http://localhost:3000/user/${id}`)
    .then(response => {
        info.push(response.data.data);
    }).catch((error) => {
        console.log(error);
    })
    return info;
}


/**
 * Fetch the calories count of a user from API
 * @param {Number} id
 * @returns Object
 */

 export const getCaloriesCount = async (id) => {
    let caloriesCountData = [];
    await axios.get(`http://localhost:3000/user/${id}`)
    .then(response => {
        caloriesCountData.push(response.data.data.keyData.calorieCount);
    }).catch((error) => {
        console.log(error);
    })
    return caloriesCountData;
}

/**
 * Fetch the protein count of a user from API
 * @param {Number} id
 * @returns Object
 */

 export const getProteinCount = async (id) => {
    let proteinCountData = [];
    await axios.get(`http://localhost:3000/user/${id}`)
    .then(response => {
        proteinCountData.push(response.data.data.keyData.proteinCount);
    }).catch((error) => {
        console.log(error);
    })
    return proteinCountData;
}

/**
 * Fetch the carbohydrate count of a user from API
 * @param {Number} id
 * @returns Object
 */

 export const getCarbohydrateCount = async (id) => {
    let carbohydrateCountData = [];
    await axios.get(`http://localhost:3000/user/${id}`)
    .then(response => {
        carbohydrateCountData.push(response.data.data.keyData.carbohydrateCount);
    }).catch((error) => {
        console.log(error);
    })
    return carbohydrateCountData;
}

/**
 * Fetch the lipid count of a user from API
 * @param {Number} id
 * @returns Object
 */

 export const getLipidCount = async (id) => {
    let lipidCountData = [];
    await axios.get(`http://localhost:3000/user/${id}`)
    .then(response => {
        lipidCountData.push(response.data.data.keyData.lipidCount);
    }).catch((error) => {
        console.log(error);
    })
    return lipidCountData;
}

/**
 * Fetch the activity of a user from API
 * @param {Number} id
 * @returns Object
 */

 export const getActivity = async (id) => {
    let getActivity = [];
    await axios.get(`http://localhost:3000/user/${id}/activity`)
    .then(response => {
        getActivity.push(response.data.data.sessions);
    }).catch((error) => {
        console.log(error);
    })
    return getActivity;
}


/**
 * Fetch the activity of a user from API
 * @param {Number} id
 * @returns Object
 */

 export const getAverageSessions = async (id) => {
    let getAverageSessions = [];
    await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
    .then(response => {
        getAverageSessions.push(response.data.data.sessions);
    }).catch((error) => {
        console.log(error);
    })
    return getAverageSessions;
}

/**
 * Fetch the activity of a user from API
 * @param {Number} id
 * @returns Object
 */

 export const getPerformance = async (id) => {
    let getPerformance = [];
    await axios.get(`http://localhost:3000/user/${id}/performance`)
    .then(response => {
        getPerformance.push(response.data.data);
    }).catch((error) => {
        console.log(error);
    })
    return getPerformance;
}


