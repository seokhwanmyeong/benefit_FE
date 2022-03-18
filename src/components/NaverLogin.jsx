import React from "react";
import styled from "styled-components";

import NaverLogin from "react-naver-login";

const Naver = () => {
  const oAuthHandler = (res) => {
    console.log(res);
  };
  //7FYQf7FgJk6F84CUSgHS
  return (
    <NaverWrap>
      <NaverLogin
        clientId="7FYQf7FgJk6F84CUSgHS"
        callbackUrl="http://localhost:3000/"
        isPopup="false"
        render={(renderProps) => (
          <NaverLoginBtn
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            isPopup="false"
            style={buttonBlock}
          >
            <div className="naver__mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 3H21V21H3V3ZM13.431 16.118H16.5V7.883H13.476V12.14L10.578 7.883H7.5V16.118H10.533V11.852L13.431 16.118Z"
                  fill="white"
                />
              </svg>
              <span className="naver__text">네이버 로그인</span>
            </div>
          </NaverLoginBtn>
        )}
        buttonText="Sign In With Naver"
        onSuccess={oAuthHandler}
        onFailure={console.error}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
      />
    </NaverWrap>
  );
};
const NaverWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 40px;
  position: static;
  width: 336px;
  height: 72px;
  margin-top: 16px;
  background: #00c73c;
  box-shadow: rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px;
  border-radius: 12px;
`;
const NaverLoginBtn = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  color: #ffffff;
  .naver__mark {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .naver__text {
    margin: 0px 4px;
  }
`;

const buttonBlock = {
  border: "none",
};

export default Naver;