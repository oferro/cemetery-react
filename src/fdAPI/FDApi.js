// eslint-disable-next-line
const fetchSerchData = (dstSerch) => {
  return new Promise ((resolve) => {
    let urlSrc = "";
    if (dstSerch.length) {
      urlSrc = `http://localhost:3001/desist/serch/${dstSerch}`;
    } else {
      urlSrc = `http://localhost:3001/desistAll`;
    }
      fetch(urlSrc)
          .then((resp) => {
            (resp.status !== 400 
            ?
            resolve(resp.json()) 
            :
            resolve([]))
            return;
            })
      console.log("FDA urlSrc = " + urlSrc);
    }
    )
  }

  // async function fetchSerchData2 (dstSerch) {
  //   let urlSrc = "";
  //   if (dstSerch.length) {
  //     urlSrc = `http://localhost:3001/desist/serch/${dstSerch}`;
  //   } else {
  //     urlSrc = `http://localhost:3001/desistAll`;
  //   }
  //   console.log("FDA urlSrc = " + urlSrc);
  //     const response = await fetch(urlSrc);
  //     const resp = await response.json();
  //     return resp;
  // }

module.exports = {
  
  fetchSerchData,
};
