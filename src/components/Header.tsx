import React from "react";
import todo from "/images/TODO 2.svg";
import moon from "/images/icon-moon.svg";
import sun from "/images/icon-sun.svg";
import styled from "styled-components";

export default function Header({
  theme,
  setTheme,
}: {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const ThemeChanger = () => setTheme(!theme);
  return (
    <Head>
      <img src={todo} alt="" />
      {theme ? (
        <img src={moon} alt="" onClick={ThemeChanger} />
      ) : (
        <img src={sun} alt="" onClick={ThemeChanger} />
      )}
    </Head>
  );
}
const Head = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;
