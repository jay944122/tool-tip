import { useState } from "react";
import styled from "styled-components";
import Tooltip from "./components/tooltip";
import TooltipSelector from "./components/ttselector";
import "./styles.css";

// Styled component for the tooltip target
const CustomTooltipTarget = styled.span`
  color: #fff;
`;

export default function App() {
  // State for storing the tooltip position
  const [selectedPosition, setSelectedPosition] = useState("left");

  // Event handler for position change
  const handlePositionChange = (value) => {
    setSelectedPosition(value);
  };

  return (
    <div className="App">
      {/* Tooltip position selector component */}
      <TooltipSelector onChange={handlePositionChange} />

      {/* Tooltip component */}
      <Tooltip text="I am a tooltip" position={selectedPosition} background="00adb5">
        <CustomTooltipTarget>Hover over me!</CustomTooltipTarget>
      </Tooltip>

      {/* Additional tooltip examples */}
      {/* <Tooltip text="I am a tooltip" position="top" background="222831">
        <CustomTooltipTarget>Top</CustomTooltipTarget>
      </Tooltip>
      <Tooltip text="I am a tooltip" position="bottom" background="393e46">
        <CustomTooltipTarget>Bottom</CustomTooltipTarget>
      </Tooltip>
      <Tooltip text="I am a tooltip" position="right" background="eeeeee">
        <CustomTooltipTarget>Right</CustomTooltipTarget>
      </Tooltip> */}

      {/* Example with tooltip within a paragraph */}
      {/* <p>
        This is a{" "}
        <Tooltip text="I am within paragraph" position="top" styleMe={false}>
          <CustomTooltipTarget>tooltip</CustomTooltipTarget>
        </Tooltip>{" "}
        within a paragraph.
      </p> */}
    </div>
  );
}
