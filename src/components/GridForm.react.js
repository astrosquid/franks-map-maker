// @flow strict

import * as React from "react";

type Props = {
  squareSize: string,
  setSquareSize: (string) => void,
  leftOffset: string,
  setLeftOffset: (string) => void,
  topOffset: string,
  setTopOffset: (string) => void,
  numColumns: string,
  setNumColumns: (string) => void,
  numRows: string,
  setNumRows: (string) => void,
  imageUrl: string,
  setImageUrl: (string) => void,
};

export default function GridForm(props: Props): React.MixedElement {
  const {
    numColumns,
    setNumColumns,
    numRows,
    setNumRows,
    squareSize,
    setSquareSize,
    leftOffset,
    setLeftOffset,
    topOffset,
    setTopOffset,
    imageUrl,
    setImageUrl,
  } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    >
      <label label="numColumnsInput">Columns</label>
      <input
        type="number"
        id="numColumnsInput"
        min={1}
        value={numColumns}
        onChange={(e) => setNumColumns(e.target.value)}
      />
      <label label="numRowsInput">Rows</label>
      <input
        type="number"
        id="numRowsInput"
        min={1}
        value={numRows}
        onChange={(e) => setNumRows(e.target.value)}
      />
      <label label="squareSizeRange">Square size</label>
      <input
        type="range"
        id="squareSizeRange"
        value={squareSize}
        onChange={(e) => setSquareSize(e.target.value)}
      />
      <label label="offsetLeftMargin">Left Offset</label>
      <input
        type="range"
        id="offsetLeftMargin"
        value={leftOffset}
        onChange={(e) => setLeftOffset(e.target.value)}
      />
      <label label="offsetTopMargin">Top Offset</label>
      <input
        type="range"
        id="offsetTopMargin"
        value={topOffset}
        onChange={(e) => setTopOffset(e.target.value)}
      />
      <label label="imageUrlInput">Image URL</label>
      <input
        type="text"
        id="imageUrlInput"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <pre>
        {JSON.stringify({ props }, null, 2)}
      </pre>
    </div>
  );
}
