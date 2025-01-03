import { IMG_CDN_URL } from "../utils/constant";

function ResturanCard({ data }) {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <img
        src={IMG_CDN_URL + data?.info?.cloudinaryImageId}
        alt="Product Image"
        className="card-img w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="card-title font-bold text-lg">{data.info.name}</h2>
        <p className="card-description text-sm text-gray-500">
          {data.info.cuisines.join(", ")}
        </p>
        <p className="card-rating text-sm text-yellow-500">
          {data.info?.avgRating} Star
        </p>
        <div className="card-actions mt-auto">
          <span className="card-price font-semibold">
            {data.info?.costForTwo}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResturanCard;

const withLabelResturentCard = (ResturanCard, label = "Promoted") => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-medium px-3 py-1 rounded-md">
          {label}
        </span>
        <ResturanCard {...props} />
      </div>
    );
  };
};

export { withLabelResturentCard };
