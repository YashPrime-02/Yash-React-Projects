// we are creating custom hooks for use of this project
import { useEffect, useState } from "react";
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.1forge.com/quotes?pairs=EUR/USD,GBP/JPY,AUD/USD&api_key=YOUR_API_KEY`)
        .then((res) => res.json()) // ".then lagaya so that we can do chaining here means ek call of api ke baad kya kya hoga"
        //since api returns a string so ".json" coberts its back to JSON
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;  //Custom hook definition and design done