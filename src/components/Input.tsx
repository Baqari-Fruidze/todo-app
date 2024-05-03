import React, { ChangeEvent } from "react";
import styled from "styled-components";
import cross from "/images/icon-cross.svg";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import check from "/images/icon-check.svg";
type TTodoArr = {
  todo: string;
  id: string;
  completed: boolean;
}[];

export default function Input() {
  const [todos, setTodos] = useState<TTodoArr>([]);
  const [todo, setTodo] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const statusChecker = () => setDone(!done);
  const InputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const foo = () =>
    setTodos([{ id: uuidv4(), todo, completed: false }, ...todos]);
  return (
    <>
      <Main>
        <InputDiv>
          <TextInput
            onChange={InputValue}
            // onKeyDown={(event) => event.key === "Enter" && foo()}.
            // onKeyDown={foo}
            type="text"
            placeholder="Create a new todo…"
            value={todo}
          />
          <Circle onClick={statusChecker} done={done}>
            {!done ? <img src={check} alt="" /> : null}
          </Circle>
        </InputDiv>
        <TodoDiv>
          {todos.map((item) => (
            <TodosLists>
              <div className="mini">
                <CircleTwo></CircleTwo>
                <Parag>{item.todo}</Parag>
              </div>
              <img src={cross} alt="" />
            </TodosLists>
          ))}
          <InfoDiv>
            <span>5 items left</span>
            <span>Clear Completed</span>
          </InfoDiv>
        </TodoDiv>
        <Notifications>
          <span className="all">All</span>
          <span>Active</span>
          <span>Completed</span>
        </Notifications>
      </Main>
    </>
  );
}

const Parag = styled.p`
  color: #494c6b;
  font-family: "Josefin Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.25px;
`;
const TextInput = styled.input`
  width: 100%;
  padding: 1.5rem 0 1.5rem 5.2rem;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border: none;
  position: relative;
`;

const Circle = styled.div<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid #e3e4f1;
  position: absolute;
  border-radius: 50%;
  top: 12.7rem;
  left: 4.3rem;
  background: ${(props) =>
    props.done ? "#fff" : "linear-gradient(135deg, #5DF 0%, #C058F3 100%)"};
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const InputDiv = styled.div``;
const TodoDiv = styled.div`
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
`;
const TodosLists = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem 1.5rem 2rem;
  border-bottom: 1px solid #e3e4f1;
  & .mini {
    display: flex;
    justify-content: ;
    align-items: center;
    gap: 1.2rem;
  }
`;
const InfoDiv = styled.div`
  display: flex;
  padding: 1.5rem 2rem 1.5rem 2rem;
  justify-content: space-between;
  & > span {
    color: #9495a5;
    font-family: "Josefin Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.167px;
  }
`;
const Notifications = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 8rem 1.5rem 8rem;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  .all {
    color: #3a7cfd;
    font-family: "Josefin Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.194px;
  }
  & span {
    color: #9495a5;
    font-family: "Josefin Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.194px;
  }
`;
const CircleTwo = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1px solid #e3e4f1;
  border-radius: 50%;
`;
