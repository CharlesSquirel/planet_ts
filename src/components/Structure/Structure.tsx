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
} from "../Overview/StyledOverview";
import source from "../../assets/icon-source.svg";

interface PlanetStructureProps {
  content: string;
  source: string;
  size: string;
}

interface PlanetProps {
  name: string;
  structure: PlanetStructureProps;
}

interface StructureProps {
  planet: PlanetProps;
  img: string;
  planetColor: string;
  size: string;
}

const Structure = ({ planet, size, img, planetColor }: StructureProps) => {
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
            <StyledPlanetDescription>{planet.structure.content}</StyledPlanetDescription>
            <StyledWrapperWiki>
              Source:
              <StyledWikiText>
                <a href={planet.structure.source}>Wikipedia</a>
              </StyledWikiText>
              <span>
                <StyledSourceIcon src={source} alt="" />
              </span>
            </StyledWrapperWiki>
          </StyledWrapperPlanet>
          <StyledButtonWrapper>
            <Button number="01" text="overview" navigate={planetToNavigate !== "mercury" ? `/${planetToNavigate}/overview` : `/`} />
            <Button number="02" text="internal structure" isActive={true} planetColor={planetColor} navigate={`/${planetToNavigate}/structure`} />
            <Button number="03" text="surface geology" navigate={`/${planetToNavigate}/surface`} />
          </StyledButtonWrapper>
        </StyledPlanetArticle>
      </StyledWrapperFlex>
      <DataBoxes planet={planet} />
    </StyledOverview>
  );
};

export default Structure;
