import styled from 'styled-components';


const DivP = styled.div`
    
   color: black;
   width: 200px;
   height:360px;
   margin: 0 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;


`;


const ImgWatch = styled.img`

width:190px;
height:250px;
`;

const BtnAgregar = styled.button`
font-family: sans-serif;
margin-top: 10px;
  color: rgba(255, 255, 255);
  font-size: 15px;
  font-weight: 500;
  padding: 0.5em 1.2em;
  background: #318aac;
  border: 2px solid;
  border-color: #318aac;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  
    &:hover {
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
        transition: all 0.2s ease;
         }
`;


export {
    DivP,
    ImgWatch,
    BtnAgregar,





}
