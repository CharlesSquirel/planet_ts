import { useRef } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { StyledHamburgerIcon, StyledNav, StyledNavDesktop, StyledNavMobile, Title, StyledLink, StyledMobileLinks, StyledDesktopLinks } from "./StyledNav";

const Nav: React.FC = () => {
  const navMobile = useRef();
  const handleToogleNav = (e) => {
    navMobile.current.style.left = e.target.classList.value.includes("close") ? "-3000px" : "0";
  };
  return (
    <>
      <StyledNav>
        <Title>THE PLANETS</Title>
        <StyledNavDesktop>
          <StyledDesktopLinks>
            <StyledLink planetNav={"mercury"}>
              <NavLink to="/">Mercury</NavLink>
            </StyledLink>
            <StyledLink planetNav={"venus"}>
              <NavLink to="/venus/overview">Venus</NavLink>
            </StyledLink>
            <StyledLink planetNav={"earth"}>
              <NavLink to="/earth/overview">Earth</NavLink>
            </StyledLink>
            <StyledLink planetNav={"mars"}>
              <NavLink to="/mars/overview">Mars</NavLink>
            </StyledLink>
            <StyledLink planetNav={"jupiter"}>
              <NavLink to="/jupiter/overview">Jupiter</NavLink>
            </StyledLink>
            <StyledLink planetNav={"saturn"}>
              <NavLink to="/saturn/overview">Saturn</NavLink>
            </StyledLink>
            <StyledLink planetNav={"uranus"}>
              <NavLink to="/uranus/overview">Uranus</NavLink>
            </StyledLink>
            <StyledLink planetNav={"neptune"}>
              <NavLink to="/neptune/overview">Neptune</NavLink>
            </StyledLink>
          </StyledDesktopLinks>
        </StyledNavDesktop>
        <StyledNavMobile ref={navMobile}>
          <StyledMobileLinks>
            <li>Mercury</li>
            <li>Venus</li>
            <li>Earth</li>
            <li>Mars</li>
            <li>Jupiter</li>
            <li>Saturn</li>
            <li>Uranus</li>
            <li>Neptune</li>
          </StyledMobileLinks>
          <div className="close" onClick={handleToogleNav}>
            <i className="fa-solid fa-xmark close"></i>
          </div>
        </StyledNavMobile>
        <StyledHamburgerIcon className="hamburger" onClick={handleToogleNav}>
          <i className="fa-solid fa-bars open"></i>
        </StyledHamburgerIcon>
      </StyledNav>
      <Outlet />
    </>
  );
};

export default Nav;
