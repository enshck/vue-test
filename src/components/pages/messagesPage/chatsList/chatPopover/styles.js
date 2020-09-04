import styled from "vue-styled-components";

export const ChatPopoverContainer = styled.div`
  position: absolute;
  bottom: -90px;
  left: calc(50% - 95px);
  padding: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgb(177 171 177);
  border-radius: 2px;
  :focus {
    outline: none;
  }

  input {
    border: 1px solid #e0dcdc;
    padding: 5px;
    border-radius: 2px;
    outline: none;
    box-sizing: border-box;
  }
`;

const buttonStyledProps = {
  isBlocked: Boolean,
};

export const Button = styled("div", buttonStyledProps)`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 700;
  text-transform: uppercase;
  height: 35px;
  background-color: ${(props) => (props.isBlocked ? "#9fa9bf" : "#4680fe")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
`;
