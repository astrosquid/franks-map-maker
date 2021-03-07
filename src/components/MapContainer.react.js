// @flow strict

import * as React from "react";
import "./mapContainer.css";

type Props = {
  width: number,
  height: number,
  squareSize: number,
  leftOffset: string,
  imageUrl: string,
  topOffset: string,
};

const BORDER_COLOR = "lime";
const BORDER_VALUE = `1px solid ${BORDER_COLOR}`;

function MapSquare({
  squareSize,
  isRight,
}: {
  squareSize: number,
  isRight: boolean,
}): React.MixedElement {
  return (
    <div
      maxWidth={squareSize}
      height={squareSize}
      style={{
        display: "inline-block",
        width: squareSize,
        height: squareSize,
        borderLeft: BORDER_VALUE,
        borderTop: BORDER_VALUE,
        borderRight: `${isRight ? BORDER_VALUE : ''}`,
      }}
      onClick={() => alert("hehe, i'm a box")}
    />
  );
}

function MapRow({
  squareSize,
  width,
  isBottom,
}: {
  squareSize: number,
  width: number,
  isBottom: boolean,
}): React.MixedElement {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: `${squareSize * width}`,
        borderBottom: `${isBottom ? BORDER_VALUE : ""}`,
      }}
    >
      {[...Array(width)].map((_, idx) => (
        <MapSquare squareSize={squareSize} key={idx} isRight={idx === width - 1} />
      ))}
    </div>
  );
}

export default function MapContainer({
  width,
  height,
  squareSize,
  imageUrl,
  leftOffset,
  topOffset,
}: Props): React.MixedElement {
  return (
    <div>
      <img
        src={imageUrl}
        alt="Your chosen background."
        style={{
          maxWidth: "1000px",
          zIndex: "-1",
          position: "absolute",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "inline-block",
          marginLeft: `${leftOffset}px`,
          top: `${topOffset}px`,
        }}
      >
        {[...Array(height)].map((_, idx) => (
          <MapRow
            key={idx}
            squareSize={squareSize}
            width={width}
            isBottom={idx === height - 1}
          />
        ))}
      </div>
    </div>
  );
}
