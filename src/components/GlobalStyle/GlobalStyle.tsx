import { createGlobalStyle } from "styled-components";
import bgStars from "../../assets/background-stars.svg";

// font-family: 'Antonio', sans-serif;
// font-family: 'League Spartan', sans-serif;

export const GlobalStyle = createGlobalStyle`
:root{
    --white: #fff;
    --black: #000;
    --mercury: #419EBB;
    --venus: #EDA249;
    --earth: #6f2ed6;
    --mars: #D14C32;
    --jupiter: #D83A34;
    --saturn: #CD5120;
    --uranus: #1ec2a4;
    --neptune: #2d68f0;
    --bg: #070724;
    --darkGray: #38384F;
    --lightGray: #838391;
    --btn-hover: #1c1c31; 
    --xxl: 80px;
    --xl: 40px;
    --lg: 14px;
    --m: 12px;
    --sm: 11px;
    --regular: 400;
   --medium: 500;
    --bold: 700;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    caret-color: transparent;
}

body {
    font-family: 'League Spartan', sans-serif;
    font-size: var(--lg);
    background-color: var(--bg);
    background-image: url(${bgStars});
    color: var(--white);
    font-weight: var(--regular);
}

a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

button {
    font-family: inherit;
    cursor: pointer;
}

ul {
    list-style-type: none;
}
`;
