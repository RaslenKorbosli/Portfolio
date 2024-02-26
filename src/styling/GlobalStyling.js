import { createGlobalStyle } from 'styled-components';
const GlobalStyling = createGlobalStyle`
:root{
  --color-main-background : #f9f9f9;
  --color-grey-500: #6b7280;
  --color-grey-800: #1f2937;
  --color-blue-700: #0369a1;
  --color-hover: #147efb;
  --main-padding-layout: 7.2rem 4.6rem;
  
  

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  html{
    font-size: 62.5%;
  }
  body {
    
    font-size: 1.6rem;
    color: var(--color-grey-800);
    font-family: "Poppins", sans-serif;
  }
  ul{
    list-style: none;
    display: flex;
    gap: 24px;
    font-weight: 500;
   
  }
  li:hover {
    color: var(--color-hover);
    
    transition: 0.3s color;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

/*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 /52 / 62 / 74 / 86 / 98
*/
export default GlobalStyling;
