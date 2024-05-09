import cross from "/images/icon-cross.svg";
import check from "/images/icon-check.svg";
import moon from "/images/icon-moon.svg";
import sun from "/images/icon-sun.svg";
import todo from "/images/TODO 2.svg";
import mobileLight from "/images/bg-mobile-light.jpg";
import mobileDark from "/images/bg-mobile-dark.jpg";
import styled from "styled-components";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";
function App() {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <Parent theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Input />
      <Para>Drag and drop to reorder list</Para>
    </Parent>
  );
}
// const Main = styled.div`
//   display: flex;
//   justify-content: center;
//   min-height: 100vh;
// `;
const Para = styled.p`
  color: #9495a5;
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.194px;
  margin-top: 4rem;
`;
const Parent = styled.div<{ theme: boolean }>`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  margin: 0 auto;
  max-width: 40rem;
  min-height: 100vh;
  background-image: url(${(props) =>
    props.theme === true ? mobileLight : mobileDark});
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: ${(props) =>
    props.theme === true ? "#FAFAFA" : " #171823"};
  padding: 4.8rem 2.4rem 7.2rem;
  @media (min-width: 90rem) {
    max-width: 54rem;
  }
`;

export default App;
