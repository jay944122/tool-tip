import styled from "styled-components";

// Styled component for the select element
const Select = styled.select`
  padding: 10px;
  margin: 100px 0;
  border-radius: 5px;
  width: 200px;
  font-size: 1.25rem;
`;

// TooltipSelector component
function TooltipSelector({ onChange }) {
  // Event handler for select change
  const handleSelectChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select name="tooltip-position" onChange={handleSelectChange}>
      {/* Option for left position */}
      <option value="left">Left</option>

      {/* Option for top position */}
      <option value="top">Top</option>

      {/* Option for right position */}
      <option value="right">Right</option>

      {/* Option for bottom position */}
      <option value="bottom">Bottom</option>
    </Select>
  );
}

export default TooltipSelector;
