import styled from 'styled-components';

import { Link } from "react-router-dom";


const HeaderSt = styled.header`
display:flex;
flex-direction:row;
justify-content:space-between;
   
    background-color: #004c58;
    padding: 20px 10px;
    margin-bottom: 30px;

`;

const H1St = styled.h1`

    color: #E1E1E1;


`;
const LinkRou = styled(Link)`
     color: #fff;
      display: inline-block;
      padding: 10px 15px;
      margin-left: 10px;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
`;

export {
    HeaderSt,
    H1St,
    LinkRou,




}
