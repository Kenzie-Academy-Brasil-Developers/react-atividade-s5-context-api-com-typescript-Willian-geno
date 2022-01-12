import styled from "styled-components"

export const Conteiner = styled.div`
  width: 100%;
  display: flex;
  
  img{
    width: 150px;
    
  }

`
export const CardConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const PriceConteiner = styled.div`

  display: flex;
  align-items: start;
  justify-content: space-around;

  p{
    margin: 0 ;
  }

  button{
    width: 35px;
    background-color: green;
    font-size: 15px;
    border:solid 1px black;
    border-radius: 5px;
  }
`