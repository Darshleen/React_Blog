import { useEffect, useRef, useState } from "react";
 const useFetch= (url)=>{
    const [data, setData] = useState(null);
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState(null);
  let eff = useRef(false);
  useEffect(() => {
    if (eff.current === false) {
      setTimeout(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw Error("could not fetch data :(");
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsLoad(false);
            setError(null);
          })

          .catch((err) => {
            console.log(err);
            setError(err.message);
            setIsLoad(false);
          });
      },2000);
      return () => {
        eff.current = true;
      };
    }
  }, [url]);
  return {data,isLoad,error};
 }

 export default useFetch;