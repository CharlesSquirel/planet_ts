import { Data, StyledDataBox, StyledDataBoxes, Title } from "./StyledDataBoxes";

const DataBoxes = ({ planet }) => {
  return (
    <StyledDataBoxes>
      <StyledDataBox>
        <Title>ROTATION TIME</Title>
        <Data>{planet.rotation}</Data>
      </StyledDataBox>
      <StyledDataBox>
        <Title>REVOLUTION TIME</Title>
        <Data>{planet.revolution}</Data>
      </StyledDataBox>
      <StyledDataBox>
        <Title>RADIUS</Title>
        <Data>{planet.radius}</Data>
      </StyledDataBox>
      <StyledDataBox>
        <Title>AVERAGE TEMP.</Title>
        <Data>{planet.temperature}</Data>
      </StyledDataBox>
    </StyledDataBoxes>
  );
};

export default DataBoxes;
