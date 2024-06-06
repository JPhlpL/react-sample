// import { MouseEvent } from "react";
import { useState } from "react";
// {item: [], heading: string }
interface ListGroupProps {
  places: string[];
  heading: string;
  onSelectItem: (place: string) => void;
}

function ListGroup({ places, heading, onSelectItem }: ListGroupProps) {
  //Rendering List using mapping
  //   let places = ["Laguna", "Batangas", "Rizal", "Cavite"];
  //   const handleClick = (event: MouseEvent) => console.log(event.target);
  //useState -> Hooks
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
      <h1> {heading} </h1>
      {noFoundMessage}
      <ul className="list-group">
        {places.map((place, index) => (
          <li
            key={place}
            // onClick={(event) => console.log(place, index, event)}
            // onClick={handleClick}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(place);
            }}
            //className="list-group-item"
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {place}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
