import React from "react";
import Button from "../Overview/Button";
import DataBoxes from "../Overview/DataBoxes";
import {
  StyledWrapperFlex,
  StyledButtonWrapper,
  StyledOverview,
  StyledImg,
  StyledPlanetArticle,
  StyledWrapperWiki,
  StyledWrapperPlanet,
  StyledPlanetTitle,
  StyledPlanetDescription,
  StyledWikiText,
  StyledSourceIcon,
  StyledSecondaryImg,
} from "../Overview/StyledOverview";
import source from "../../assets/icon-source.svg";

interface PlanetGeologyProps {
  content: string;
  source: string;
  size: string;
}

interface PlanetProps {
  name: string;
  geology: PlanetGeologyProps;
}

interface GeologyProps {
  planet: PlanetProps;
  img: string;
  planetColor: string;
  size: string;
  position: string;
  imgSecondary: string;
}

const Surface = ({ planet, img, size, imgSecondary, position, planetColor }: GeologyProps) => {
  const planetToNavigate = planet.name.toLowerCase();
  return (
    <StyledOverview>
      <StyledWrapperFlex>
        <StyledImg>
          <img src={img} alt={planet.name} width={size} height={size} />
          <StyledSecondaryImg position={position}>
            <img src={imgSecondary} alt="" />
          </StyledSecondaryImg>
        </StyledImg>
        <StyledPlanetArticle>
          <StyledWrapperPlanet>
            <StyledPlanetTitle>{planet.name}</StyledPlanetTitle>
            <StyledPlanetDescription>{planet.geology.content}</StyledPlanetDescription>
            <StyledWrapperWiki>
              Source:
              <StyledWikiText>
                <a href={planet.geology.source}>Wikipedia</a>
              </StyledWikiText>
              <span>
                <StyledSourceIcon src={source} alt="" />
              </span>
            </StyledWrapperWiki>
          </StyledWrapperPlanet>
          <StyledButtonWrapper>
            <Button number="01" text="overview" navigate={planetToNavigate !== "mercury" ? `/${planetToNavigate}/overview` : `/`} />
            <Button number="02" text="internal structure" navigate={`/${planetToNavigate}/structure`} />
            <Button number="03" text="surface geology" isActive={true} planetColor={planetColor} navigate={`/${planetToNavigate}/surface`} />
          </StyledButtonWrapper>
        </StyledPlanetArticle>
      </StyledWrapperFlex>
      <DataBoxes planet={planet} />
    </StyledOverview>
  );
};

export default Surface;
