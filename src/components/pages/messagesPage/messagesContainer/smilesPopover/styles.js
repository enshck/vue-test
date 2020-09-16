import styled from "vue-styled-components";

export const SmilesPopoverContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: calc(50% - 85px);
  padding: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgb(177 171 177);
  border-radius: 2px;
  max-height: 300px;
  overflow: auto;
  :focus {
    outline: none;
  }
  @media (max-width: 1700px) {
    left: calc(50% - 165px);
  }
  @media (max-width: 900px) {
    max-height: 150px;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 150px;
  grid-gap: 25px;
  box-sizing: border-box;
`;

export const SmileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
