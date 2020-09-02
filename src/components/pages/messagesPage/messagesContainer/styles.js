import styled from "vue-styled-components";

export const MainContainer = styled.div`
  height: 100%;
  max-height: 100%;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
`;

export const ChangedChatContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const MessageElement = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  :first-child {
    margin-top: 0;
  }
`;

export const MessageContainer = styled.div`
  overflow: auto;
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
  height: 100px;

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
  }
`;
