// @flow

import * as React from "react";
import { useState } from "react";
import GridForm from "./components/GridForm.react";
import MapContainer from "./components/MapContainer.react";
import "./components/gridFormContainer.css";

function App(): React.Node {
  const [squareSize, setSquareSize] = useState("50");
  const [leftOffset, setLeftOffset] = useState("0");
  const [topOffset, setTopOffset] = useState("0");
  const [numColumns, setNumColumns] = useState("1");
  const [numRows, setNumRows] = useState("1");
  const [imageUrl, setImageUrl] = useState(
    "https://i.pinimg.com/originals/33/ae/88/33ae88c1acf21d8f636014886184c156.jpg"
  );
  return (
    <div className="App">
      <div className="gridFormContainer">
        <GridForm
          squareSize={squareSize}
          setSquareSize={setSquareSize}
          leftOffset={leftOffset}
          setLeftOffset={setLeftOffset}
          topOffset={topOffset}
          setTopOffset={setTopOffset}
          imageUrl={imageUrl}
          numColumns={numColumns}
          setNumColumns={setNumColumns}
          numRows={numRows}
          setNumRows={setNumRows}
          setImageUrl={setImageUrl}
        />
        <MapContainer
          squareSize={parseInt(squareSize)}
          height={parseInt(numRows)}
          width={parseInt(numColumns)}
          imageUrl={imageUrl}
          leftOffset={leftOffset}
          topOffset={topOffset}
        />
      </div>
    </div>
  );
}

export default App;
