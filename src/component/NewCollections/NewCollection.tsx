import React from "react";
import "./NewCollection.css";
import { NewCollections } from "../Assests/data";
import Item from "../item/Item";

const NewCollection: React.FC = () => {
  return (
    <>
      <div className="new-collection">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {NewCollections.map((item, i) => {
            return <Item key={i} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NewCollection;
