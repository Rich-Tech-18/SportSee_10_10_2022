import { useParams } from "react-router";
import { useEffect, useState } from "react";



export const useIdParamUrl = () => {
    const id = useParams()
    return id;
}


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