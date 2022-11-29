import { useParams } from "react-router";
import { useEffect, useState } from "react";


  /**
 * Function that returns the id parametre of the url page
 *
 * @return {object} Return the number of nutriment in a string format
 */

export const useIdParamUrl = () => {
    const id = useParams();
      /**
       * @type {Array<object>}
       */
    return id;
}


  /**
 * Function that returns all the data, sorted by the class element
 *
 * @param {object} id - the id of the user
 * @param {string} apiGetFunction - the function who fetch the api
 * @param {string} classNameData - the class name who sort the data
 * 
 * @return {object} Return the array
 */

export const useData = (id, apiGetFunction, classNameData) => {
      
    const getFunction = apiGetFunction
    const [data, setData] = useState([]);


    useEffect(() => {
      const getSessionData = async (id) => {
          const sessionsData = await getFunction(id);
          setData(sessionsData);
      }
      getSessionData(id.idUser);
    }, [id.idUser, getFunction])

    const dataSorted = new classNameData(data);

    return dataSorted;
}