import React, { useState } from "react";
import ItemList from "./ItemList";

function ResCategory({ data, showItem, index, handleShowAccordian }) {
  return (
    <div>
      <div className="w-6/12 mx-auto my-3 text-start bg-gray-50 shadow-lg p-4 cursor-pointer ">
        <div
          className="flex justify-between text-center"
          onClick={() => handleShowAccordian(index)}
        >
          <span className="font-bold">
            {data.title} ({data?.categories?.length})
          </span>
          <span>&#9660;</span>
        </div>
        {showItem && <ItemList data={data}></ItemList>}
      </div>
    </div>
  );
}

export default ResCategory;
