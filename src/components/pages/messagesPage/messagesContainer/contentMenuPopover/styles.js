import styled from "vue-styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const ContextMenuElement = styled.div`
  border-bottom: 1px solid #e0dcdc;
  padding: 10px;
  text-align: center;
  user-select: none;
  margin-top: 10px;
  cursor: pointer;

  :first-child {
    margin-top: 0;
  }

  :hover {
    border-color: #4680fe;
    color: #4680fe;
    transition: 0.4s;
  }
`;

const contextMenuProps = {
  isTopPosition: Boolean,
};

export const ContextMenuPopoverContainer = styled("div", contextMenuProps)`
  position: absolute;
  top: ${(props) => (props.isTopPosition ? "-150px" : "30px")};
  left: 5%;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgb(177 171 177);
  border-radius: 2px;
  max-height: 300px;
  overflow: auto;
  z-index: 9999999;
  :focus {
    outline: none;
  }
`;
