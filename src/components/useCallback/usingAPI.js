import { useCallback, useEffect, useState } from "react";

export const useAPI = (url) => {
    const [items, setItems] = useState([]);

    const fetchData = useCallback(async () => {
        const data = await fetch(url);
        const response = await data.json();
        setItems(response);
        console.log(response);
    },[url]);

    useEffect(() => {
        fetchData();
    },[fetchData]);

    return items;
}