import styled from "styled-components";

interface planetNavProps {
  planetNav: string;
}

export const StyledNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 85px;
  padding: 22px 40px 27px 32px;
  border-bottom: 1px solid var(--darkGray);
`;

export const StyledMobileLinks = styled.ul`
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--white);
  color: var(--black);
  display: flex;
  text-transform: uppercase;
`;

export const StyledLink = styled.li`
  line-height: 25px;
  letter-spacing: 1px;
  color: var(--lightGray);
  font-weight: var(--bold);
  font-size: var(--m);
  position: relative;
  .active {
    color: var(--white);
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: -29px;
      width: ${({ planetNav }: planetNavProps) =>
        (planetNav === "mercury" && "84px") ||
        (planetNav === "venus" && "61px") ||
        (planetNav === "mars" && "51px") ||
        (planetNav === "earth" && "57px") ||
        (planetNav === "jupiter" && "70px") ||
        (planetNav === "saturn" && "71px") ||
        (planetNav === "uranus" && "74px") ||
        (planetNav === "neptune" && "83px")};
      height: 6px;
      background-color: ${({ planetNav }) =>
        (planetNav === "mercury" && "var(--mercury)") ||
        (planetNav === "venus" && "var(--venus)") ||
        (planetNav === "mars" && "var(--mars)") ||
        (planetNav === "earth" && "var(--earth)") ||
        (planetNav === "jupiter" && "var(--jupiter)") ||
        (planetNav === "saturn" && "var(--saturn)") ||
        (planetNav === "uranus" && "var(--uranus)") ||
        (planetNav === "neptune" && "var(--neptune)")};
    }
  }
`;

export const Title = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  @media (min-width: ${({ theme }) => theme.break.minDesktop}) {
    font-size: var(--xl);
  }
`;

export const StyledNavDesktop = styled.nav`
  padding-top: 6px;
  @media (max-width: ${({ theme }) => theme.break.maxMobile}) {
    display: none;
  }
`;

export const StyledDesktopLinks = styled.ul`
  display: flex;
  text-transform: uppercase;
  gap: 33px;
  & li {
    @media (min-width: ${({ theme }) => theme.break.minDesktop}) {
      font-size: 18px;
    }
  }
`;

export const StyledNavMobile = styled.nav`
  transition: all 0.5s ease-out;
  position: absolute;
  left: -3000px;
  top: 0;
  width: 100%;
  .close {
    position: absolute;
    right: 15px;
    top: 6px;
    font-size: 18px;
    cursor: pointer;
    color: var(--black);
  }
`;

export const StyledHamburgerIcon = styled.div`
  cursor: pointer;
  font-size: 34px;
  @media (min-width: ${({ theme }) => theme.break.maxMobile}) {
    display: none;
  }
`;
