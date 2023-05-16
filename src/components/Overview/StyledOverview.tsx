import styled from "styled-components";

interface PositionProps {
  position: string;
}

// MAIN CONTAINER
export const StyledOverview = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 56px;
  @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
    flex-direction: column;
    gap: 80px;
    padding: 146px 40px 36px 39px;
  }
`;

// PLANET IMG
export const StyledImg = styled.div`
  align-self: center;
  position: relative;
`;

export const StyledSecondaryImg = styled.div`
  position: absolute;
  top: ${({ position }: PositionProps) =>
    (position === "Mercury" && "230px") ||
    (position === "Venus" && "279px") ||
    (position === "Earth" && "313px") ||
    (position === "Mars" && "251px") ||
    (position === "Jupiter" && "377px") ||
    (position === "Saturn" && "391px") ||
    (position === "Uranus" && "333px") ||
    (position === "Neptune" && "303px")};
  left: ${({ position }) =>
    (position === "Mercury" && "64px") ||
    (position === "Venus" && "118px") ||
    (position === "Earth" && "145px") ||
    (position === "Mars" && "86px") ||
    (position === "Jupiter" && "209px") ||
    (position === "Saturn" && "252px") ||
    (position === "Uranus" && "148px") ||
    (position === "Neptune" && "143px")};
  width: 163px;
  height: 199px;
`;

// PLANET TEXT
export const StyledPlanetArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 69px;
    width: 100%;
  }
`;

export const StyledPlanetDescription = styled.p`
  line-height: 25px;
  font-size: var(--lg);
  padding-right: 80px;
  @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
    padding: 0;
  }
`;

export const StyledPlanetTitle = styled.h2`
  font-family: "Antonio", sans-serif;
  line-height: 104px;
  text-transform: uppercase;
  font-size: var(--xxl);
  font-weight: var(--regular);
  @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
    font-size: 48px;
    line-height: 62px;
  }
`;

export const StyledWrapperPlanet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
    width: 339px;
  }
`;

// PLANET TEXT WIKI SOURCE
export const StyledWrapperWiki = styled.div`
  display: flex;
  gap: 8px;
  opacity: 0.5;
  line-height: 25px;
  font-size: var(--lg);
`;

export const StyledSourceIcon = styled.img`
  width: 12px;
  height: 12px;
`;
export const StyledWikiText = styled.span`
  text-decoration: underline;
  font-weight: var(--bold);
`;

// BUTTON BOX
export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
    align-self: center;
  }
`;

export const StyledWrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 85px 165px 87px 189px;
  @media (min-width: 1500px) {
    justify-content: center;
    gap: 300px;
    padding: 85px 0 87px 0;
  }
`;
