import React from "react";

function Categories() {
  const categories = ["Indoor Planters", "Fancy Planters", "White Planters"];
  return (
    <div className="">
      <h1 className="">Top Categories</h1>
      <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {categories.map((category) => {
            <div>
              <p>{category}</p>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
