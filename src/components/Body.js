import ResturanCard from "../components/ResturentCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useFetchMenu } from "../utils/useFetch";

const Body = () => {
  const { resData, orignalData, error, setOrignalData } = useFetchMenu(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type="
  );
  const [searchText, setSearchText] = useState("");

  const filterResutrent = () => {
    const data = resData.filter((res) => res?.info?.avgRating >= 4.5);
    setOrignalData(data);
  };

  const filterPromotedResturent = () => {
    const promotedResturent = resData.filter((res) => res?.info?.isOpen);
    setOrignalData(promotedResturent);
  };

  useEffect(() => {
    searchHandler();
  }, [searchText]);

  const inputChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchHandler = () => {
    if (searchText) {
      const searchData = resData.filter((res) =>
        res.info?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setOrignalData(searchData);
    }
  };

  const clearHandler = () => {
    setOrignalData(resData);
    setSearchText("");
  };

  if (resData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {error === "" ? (
        <div>
          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <input
              className="w-full sm:w-1/2 lg:w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for restaurants"
              type="text"
              id="search"
              onChange={inputChangeHandler}
              value={searchText}
            />
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={clearHandler}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Clear
              </button>
              <button
                onClick={filterResutrent}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Top Rated
              </button>
              <button
                onClick={filterPromotedResturent}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Promoted
              </button>
            </div>
          </div>

          {/* Restaurant Cards */}
          {orignalData.length === 0 ? (
            <h3 className="text-center text-lg font-medium text-gray-500">
              No restaurants found.
            </h3>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {orignalData.map((res) => (
                <Link
                  to={`/restaurant/${res?.info?.id}`}
                  key={res.info.id}
                  className="flex flex-col h-full"
                >
                  <ResturanCard data={res} />
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
};

export default Body;
