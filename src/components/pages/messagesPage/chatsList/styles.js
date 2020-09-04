import styled from "vue-styled-components";

export const MainContainer = styled.div`
  box-sizing: border-box;
  border-right: 1px solid #e0dcdc;
  height: 100%;
  padding: 10px;
`;

const ChatElementType = {
  isChanged: Boolean,
};

export const ChatElement = styled("div", ChatElementType)`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #e0dcdc;
  box-sizing: border-box;
  margin-top: 20px;
  border-color: ${(props) => (props.isChanged ? "#4680fe" : "#e0dcdc")};

  :first-child {
    margin-top: 0;
  }
`;

export const AddChatTitle = styled.div`
  font-size: 16px;
  text-align: center;
  user-select: none;
`;

export const ChatTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-transform: capitalize;
  user-select: none;
`;

export const ChatPopoverMainContainer = styled.div`
  padding: 10px;
  position: relative;
`;
