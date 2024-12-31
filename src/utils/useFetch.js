import { useEffect, useState } from "react";

const useFetchData = (id) => {
  const [menuData, setMenuData] = useState([]);
  const [orignalData, setOrignalData] = useState([]);
  const [error, setError] = useState("");

  async function fetchData(id) {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=` +
        id
    );
    const data = await res.json();
    setMenuData(data.data.cards);
  }
  useEffect(() => {
    fetchData(id);
  }, [id]);

  return { menuData, orignalData, error, setMenuData, setOrignalData };
};
export default useFetchData;

const useFetchMenu = (url) => {
  const [resData, setResData] = useState([]);
  const [orignalData, setOrignalData] = useState([]);
  const [error, setError] = useState("");

  async function fetchData(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setError("Error cant fetch res Data");
        return;
      }
      const data = await res.json();
      setResData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setOrignalData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { resData, orignalData, error, setResData, setOrignalData, setError };
};

function useFetchRecomendedData() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6643923&lng=77.4465323&restaurantId=381722&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await res.json();
    setData(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
}

export { useFetchMenu, useFetchRecomendedData };
