// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let places = ["Laguna", "Batangas", "Rizal", "Cavite"];
  return (
    <div>
      {/* <Message>
            </Message> */}
      {/*  */}
      <ListGroup places={places} heading="Cities" />
    </div>
  );
}

export default App;
