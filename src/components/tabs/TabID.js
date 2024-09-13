import React, { useEffect, useState } from "react";
import FDApi from "../../fdAPI/FDApi";


const TabID = ({id}) => {

    //const [desistID, setDesistID] = useState(id);
    const [dstData, setDstData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    // const [noData, setNoData] = useState(""); // fetch status === 400 Not Found


    console.log("id: ",id);

    useEffect((id) => {
      async function getDesistData(id) {
        // setDstData([]);
        FDApi.fetchDesistById(id)
          .then(
            (data) => setDstData(data),
            setLoading(false),
            )
          .then(
            console.log(
              "desisID : ", dstData
            )  
          )
          .catch(console.log);
      }
  
        getDesistData();
      
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
        <>
          {loading
            ?
            <p> Lodoing ...</p>
            :
            <p>
                {dstData}
            </p>
          }
        </>
    )    
}

export default TabID;