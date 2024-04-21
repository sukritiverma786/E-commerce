import React, { useEffect, useState } from "react";
import "./NewCollection.css";
// import { NewCollections } from "../Assests/data";
import Item from "../item/Item";

const NewCollection: React.FC = () => {
  const [NewCollections, setNewCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newcolletion")
      .then((response) => response.json())
      .then((data) => setNewCollection(data));
  }, []);
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
