// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let places = ["Laguna", "Batangas", "Rizal", "Cavite"];

  const handleSelectItem = (place: string) => {
    console.log(place);
  };

  return (
    // <div>
    //   {/* <Message>
    //         </Message> */}
    //   {/*  */}
    //   <ListGroup
    //     places={places}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    // <div>
    //   <Alert>
    //     {" "}
    //     Hello <span>asdas</span> World{" "}
    //   </Alert>
    // </div>
    <div>
      <Button>Yawa</Button>
    </div>
  );
}

export default App;
