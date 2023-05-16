import React from "react";
import Button from "./Button";
import DataBoxes from "./DataBoxes";
import {
  StyledWrapperFlex,
  StyledButtonWrapper,
  StyledOverview,
  StyledImg,
  StyledWrapperWiki,
  StyledWrapperPlanet,
  StyledWikiText,
  StyledSourceIcon,
  StyledPlanetArticle,
  StyledPlanetTitle,
  StyledPlanetDescription,
} from "./StyledOverview";
import source from "../../assets/icon-source.svg";

interface PlanetOverviewProps {
  content: string;
  source: string;
  size: string;
}

interface PlanetProps {
  name: string;
  overview: PlanetOverviewProps;
}

interface OverviewProps {
  planet: PlanetProps;
  img: string;
  planetColor: string;
  size: string;
}

const Overview = ({ planet, img, size, planetColor }: OverviewProps) => {
  const planetToNavigate = planet.name.toLowerCase();
  return (
    <StyledOverview>
      <StyledWrapperFlex>
        <StyledImg>
          <img src={img} alt={planet.name} width={size} height={size} />
        </StyledImg>
        <StyledPlanetArticle>
          <StyledWrapperPlanet>
            <StyledPlanetTitle>{planet.name}</StyledPlanetTitle>
            <StyledPlanetDescription>{planet.overview.content}</StyledPlanetDescription>
            <StyledWrapperWiki>
              Source:
              <StyledWikiText>
                <a href={planet.overview.source}>Wikipedia</a>
              </StyledWikiText>
              <span>
                <StyledSourceIcon className="source-icon" src={source} alt="" />
              </span>
            </StyledWrapperWiki>
          </StyledWrapperPlanet>
          <StyledButtonWrapper>
            <Button number="01" text="overview" isActive={true} planetColor={planetColor} navigate={planetToNavigate !== "mercury" ? `/${planetToNavigate}/overview` : `/`} />
            <Button number="02" text="internal structure" navigate={`/${planetToNavigate}/structure`} />
            <Button number="03" text="surface geology" navigate={`/${planetToNavigate}/surface`} />
          </StyledButtonWrapper>
        </StyledPlanetArticle>
      </StyledWrapperFlex>
      <DataBoxes planet={planet} />
    </StyledOverview>
  );
};

export default Overview;
