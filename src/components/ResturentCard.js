// import "../../index.css";
import { IMG_CDN_URL } from "../utils/constant";
function ResturanCard({ data }) {
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + data?.info?.cloudinaryImageId}
        alt="Product Image"
        className="card-img"
      />
      <div className="card-content">
        <h2 className="card-title">{data.info.name}</h2>
        <p className="card-description">{data.info.cuisines.join(",")}</p>
        <p className="card-description">{data.info?.avgRating} Star</p>
        <div className="card-actions">
          <span className="card-price">{data.info?.costForTwo}</span>
        </div>
      </div>
    </div>
  );
}
export default ResturanCard;

const withLabelResturentCard = (ResturanCard) => {
  return (props) => {
    return (
      <div>
        <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-purple-700/10  mx-5 absolute w-20 text-center">
          Promoted
        </span>

        <ResturanCard {...props} />
      </div>
    );
  };
};
export { withLabelResturentCard };
