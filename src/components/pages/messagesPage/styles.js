import styled from "vue-styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  border: 1px solid #e0dcdc;
  box-sizing: border-box;
  flex: 1;
  @media (max-width: 900px) {
    position: relative;
    display: flex;
    border-bottom: none;
  }
`;

export const MainContentContainer = styled.div`
  height: 100%;
  width: 100%;
  @media (max-width: 1650px) {
    box-sizing: border-box;
    padding: 0 10px 0 10px;
  }
`;
