import { MouseEvent } from "react";
import { useState } from "react";
function ListGroup() {
  //Rendering List using mapping
  let places = ["Laguna", "Batangas", "Rizal", "Cavite"];
  const handleClick = (event: MouseEvent) => console.log(event.target);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   places = [];

  //   if (places.length === 0)
  //     return (
  //       <>
  //         <h1> List </h1>
  //         <p> No item Found</p>
  //       </>
  //     );

  //const noFoundMessage = places.length === 0 ? <p> No Item Found </p> : null;
  const noFoundMessage = places.length === 0 && <p> No item found </p>; //<- better way

  return (
    //Use <> if you need multiple html components
    <>
      <h1> List of Places </h1>
      {noFoundMessage}
      <ul className="list-group">
        {places.map((place, index) => (
          <li
            key={place}
            // onClick={(event) => console.log(place, index, event)}
            // onClick={handleClick}
            onClick={handleClick}
            //className="list-group-item"
            className="list-group-item"
          >
            {place}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
