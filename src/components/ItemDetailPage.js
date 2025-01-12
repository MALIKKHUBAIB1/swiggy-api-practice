import { useNavigate, useParams } from "react-router-dom";
import "./detailPage.css";
import Shimmer from "./Shimmer";
import useFetchData, { useFetchRecomendedData } from "../utils/useFetch";
import ResCategory from "./ResCategory";
import { useState } from "react";
function DetailPage() {
  const [showIndex, setShowIndex] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { menuData, error } = useFetchData(id);
  const data = useFetchRecomendedData();
  const categorey = data.filter(
    (category) => category?.card?.card?.categories?.length >= 1
  );
  if (!error === "") return <Shimmer />;
  if (menuData.length <= 0) {
    return <p>loading...</p>;
  }
  function handleShowAccordian(index) {
    if (showIndex === index) {
      setShowIndex(null);
    } else setShowIndex(index);
  }
  const goBackHandler = () => {
    navigate(-1);
  };

  if (menuData.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">
          {menuData[2].card?.card?.info?.name}
        </h1>
        <p className="font-bold text-lg">
          {menuData[2].card?.card?.info?.cuisines.join(",")}-{" "}
          {menuData[2].card?.card?.info?.costForTwoMessage}
        </p>

        {categorey &&
          categorey?.map((cat, index) => {
            return (
              <ResCategory
                // key={cat.card?.card?.categories?.itemCards?.card.info.id}
                key={index}
                data={cat.card?.card}
                showItem={index === showIndex ? true : false}
                index={index}
                handleShowAccordian={handleShowAccordian}
              />
            );
          })}
      </div>
    </>
  );
}
export default DetailPage;
