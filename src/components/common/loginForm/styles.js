import styled from "vue-styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
`;

export const FormMainContainer = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
`;

const typeSubmitButton = {
  isBlocked: Boolean,
};

export const SubmitButton = styled("div", typeSubmitButton)`
  width: 100%;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 700;
  text-transform: uppercase;
  height: 48px;
  background-color: ${(props) => (props.isBlocked ? "#9fa9bf" : "#4680fe")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  border-radius: 3px;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.3s;
`;

export const SignUpInput = styled.input`
  width: 100%;
  font-size: 14px;
  color: #444;
  background: #fff;
  border: 1px solid #707070;
  padding: 12px 12px 10px;
  outline: none;
  border-radius: 3px;
  box-sizing: border-box;
  margin-top: 5px;
  transition: 0.2s;
  :focus {
    border-color: #72aee2;
  }
`;

export const ErrorMessage = styled.h3`
  color: red;
  font-size: 14px;
  text-align: center;
`;

export const TabContainer = styled.div`
  border-bottom: 1px solid #e8e8e8;
  height: 60px;
  padding: 0;
  display: flex;
  width: 100%;
`;

export const StyledNavLink = styled.div`
  text-decoration: none;
  border-radius: 0;
  transition: border-color, background-color 0.2s ease-out;
  border-bottom: 2px solid transparent;
  background-color: transparent;
  margin-bottom: -1px;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  color: grey;
  flex: 1;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    color: grey;
  }

  .router-link-active {
    color: #4680fe;
  }
`;

export const ControlsContainer = styled.div`
  padding: 40px 60px 50px;
  position: relative;
`;

export const InputContainer = styled.div`
  margin-top: 30px;
  label {
    font-weight: 600;
    font-size: 14px;
    color: grey;
  }
`;

export const Social = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-around;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
