import styled, { css } from "vue-styled-components";

export const MainContainer = styled.div`
  height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-rows: minmax(85%, 400px) minmax(15%, 200px);
`;

export const ChangedChatContainer = styled.div``;

const messageElementProps = {
  isEditMode: Boolean,
};

export const MessageElement = styled("div", messageElementProps)`
  width: 100%;
  font-size: 16px;
  display: flex;
  margin-top: 20px;
  box-sizing: border-box;
  max-width: calc(100% - 20px);
  word-break: break-word;
  white-space: pre-wrap;
  position: relative;
  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 5px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  ${({ isEditMode }) =>
    isEditMode &&
    css`
      user-select: none;
      :first-child {
        margin-top: 50px;
      }
    `}

  @media (max-width: 900px) {
    :first-child {
      margin-top: 50px;
      ${({ isEditMode }) =>
        isEditMode &&
        css`
          :first-child {
            margin-top: 80px;
          }
        `}
    }
  }
`;

export const StyledCheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 14px;
  margin-bottom: 12px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    box-sizing: border-box;
    background-color: #eee;
    border: 1px solid #aaa;
    border-radius: 3px;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ span {
      background-color: #769ff9;
      border: none;
    }
    &:checked ~ span:after {
      display: block;
      left: 6px;
      top: 1px;
    }
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  span:after {
    left: 5px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const MessageSubElement = styled.div`
  width: fit-content;
  background: ${(props) => (props.isChangedMessage ? "red" : "transparent")};
`;

export const MessageContainer = styled.div`
  overflow: auto;
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
`;

export const MessageMainContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const EditControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0px 5px 5px 0px rgba(230, 230, 230, 0.3);
  z-index: 99999;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  @media (max-width: 900px) {
    height: 80px;
    flex-direction: column;
  }
`;

export const MobileHeader = styled(EditControlContainer)`
  z-index: 999;
  height: 50px;
  flex-direction: row;

  img {
    width: 15px;
  }

  p {
    margin: 0 auto;
    font-size: 18px;
  }
  @media (min-width: 901px) {
    display: none;
  }
`;

export const StyledButton = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #769ff9;
  color: #fff;
  box-sizing: border-box;
  margin-left: 20px;
  border-radius: 5px;
  cursor: pointer;

  :first-child {
    margin-left: 0;
  }
`;

export const CancelButton = styled.div`
  color: #000;
  cursor: pointer;
`;

export const Controls = styled.div`
  display: flex;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
  span {
    color: #c1b7b7;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const NotChangedChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const SendMessageInputContainer = styled.div`
  width: 100%;
  position: relative;

  textarea {
    resize: none;
    height: 100%;
    width: 100%;
    border: none;
    border-top: 1px solid #e0dcdc;
    outline: none;
    font-size: 16px;
    padding: 10px;
    box-sizing: border-box;
    padding-right: 60px;
  }
`;

export const SmilesContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SendMessageButton = styled.div`
  img {
    width: 20px;
    margin-top: 4px;
  }
  margin-right: 5px;
`;
