import styled from "styled-components";

interface ButtonProps {
  isActive: boolean;
  planetColor: string;
}

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 25px;
  position: relative;
  width: 350px;
  height: 48px;
  padding: 12px 84px 11px 28px;
  line-height: 25px;
  letter-spacing: 2.57143px;
  text-transform: uppercase;
  border: 1px solid var(--darkGray);
  color: var(--white);
  font-weight: var(--bold);
  font-size: var(--m);
  background-color: ${(props: ButtonProps) =>
    (props.isActive && props.planetColor === "mercury" && "var(--mercury)") ||
    (props.isActive && props.planetColor === "venus" && "var(--venus)") ||
    (props.isActive && props.planetColor === "earth" && "var(--earth)") ||
    (props.isActive && props.planetColor === "mars" && "var(--mars)") ||
    (props.isActive && props.planetColor === "jupiter" && "var(--jupiter)") ||
    (props.isActive && props.planetColor === "saturn" && "var(--saturn)") ||
    (props.isActive && props.planetColor === "uranus" && "var(--uranus)") ||
    (props.isActive && props.planetColor === "neptune" && "var(--neptune)") ||
    "transparent"};
  pointer-events: ${({ isActive }) => (isActive && "none") || "auto"};
  &:hover {
    background-color: var(--btn-hover);
  }
  .btn-number {
    opacity: 0.5;
  }
`;
