import ResturanCard, { withLabelResturentCard } from "./ResturentCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useFetchMenu } from "../utils/useFetch";
const Body = () => {
  const { resData, orignalData, error, setOrignalData } = useFetchMenu(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type="
  );

  const [searchText, setSearchText] = useState("");

  function filterResutrent() {
    let data = resData.filter((res) => res?.info?.avgRating >= 4);
    setOrignalData(data);
  }

  function filterPromotedResturent() {
    const promotedResturent = resData.filter((res) => res?.info?.isOpen);
    setOrignalData(promotedResturent);
  }

  useEffect(() => {
    serachHandler();
  }, [searchText]);

  const inputChnageHandler = (e) => {
    setSearchText(e.target.value);
  };

  function serachHandler() {
    if (searchText) {
      const searchData = resData.filter((res) =>
        res.info?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setOrignalData(searchData);
    }
  }

  const clearhandler = () => {
    setOrignalData(resData);
    setSearchText("");
  };

  if (resData.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      {error === "" ? (
        <div className="">
          <div className="flex justify-start">
            <input
              className="min-w-80 mx-7 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
              placeholder="search product"
              type="text"
              id="search"
              onChange={inputChnageHandler}
              value={searchText}
            />
            <div className="flex mx-10">
              <button
                onClick={clearhandler}
                type="button"
                className="text-slate-50 text-2xl bg-slate-950  w-40 rounded-md p-2"
              >
                clear
              </button>
            </div>
            <button
              onClick={filterResutrent}
              type="button"
              className="text-slate-50 text-2xl bg-slate-950  w-fit rounded-md"
            >
              Top Rated Resturent
            </button>
            <button
              onClick={filterPromotedResturent}
              type="button"
              className="text-slate-50 text-2xl bg-slate-950  w-fit rounded-md mx-2"
            >
              Filter Promoted
            </button>
          </div>
          {/* {resData.length === 0 && (
            <h3 className="text-2xl text-center my-10">No data found</h3>
          )} */}
          <div className="res-container">
            {orignalData.map((res) => {
              return (
                <Link to={"/restaurant/" + res?.info?.id} key={res.info.id}>
                  <ResturanCard data={res} />;
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};
export default Body;
