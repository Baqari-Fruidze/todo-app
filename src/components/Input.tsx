import React from "react";
import styled from "styled-components";

export default function Input() {
  return (
    <Con>
      <Circle></Circle>
      <Para>Create a new todo…</Para>
    </Con>
  );
}
const Para = styled.p`
  color: #9495a5;
  font-family: "Josefin Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.167px;
`;
const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  border: 1px solid grey;
  margin-right: 1.2rem;
  border-radius: 50%;
  display: inline;
`;
const Con = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  padding: 1.4rem 0 1.4rem 2rem;
`;
