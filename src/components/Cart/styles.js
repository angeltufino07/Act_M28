import styled from 'styled-components';


const LiP = styled.div`
    
   
    
`;

const ImgCart = styled.img`

width:190px;
height:250px;
`;

const BtnEliminar = styled.button`
font-family: sans-serif;
margin-top: 10px;
  color: rgba(255, 255, 255);
  font-size: 15px;
  font-weight: 500;
  padding: 0.5em 1.2em;
  background: #f50b0b;
  border: 2px solid;
  border-color: #f50b0b;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  
    &:hover {
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 4px 16px rgb(172,5,5, 1);
        transition: all 0.2s ease;
         }
`;

export {
    LiP,
    ImgCart,
    BtnEliminar

  


}


