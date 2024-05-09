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
  const [done, setDone] = useState<boolean>(true);
  const [selector, setSelector] = useState<string>("all");
  function CompletedDeleter() {
    let filtered = todos.filter((item) => !item.completed);
    setTodos(filtered);
  }
  const statusChecker = () => setDone(!done);
  const deleteTodo = (id: string) => {
    let filtered = todos.filter((item) => item.id !== id);
    setTodos(filtered);
  };
  const count = todos.reduce(
    (acc, el) => (!el.completed ? (acc = acc + 1) : acc),
    0
  );
  const InputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const foo = () => {
    setTodos([{ id: uuidv4(), todo, completed: done }, ...todos]);
    setTodo("");
  };
  function arrStatusChecker(id: string) {
    let mapped = todos.map((item) => {
      if (id === item.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(mapped);
  }
  return (
    <>
      <Main>
        <InputDiv>
          <TextInput
            onChange={InputValue}
            onKeyDown={(event) => event.key === "Enter" && foo()}
            type="text"
            placeholder="Create a new todo…"
            value={todo}
          />
          <Circle onClick={statusChecker} done={done}>
            {done ? <img src={check} alt="" /> : null}
          </Circle>
        </InputDiv>
        <TodoDiv>
          {todos
            .filter((item) => {
              if (selector === "all") return true;
              if (selector === "active") return !item.completed;
              if (selector === "completed") return item.completed;
            })
            .map((item) => (
              <TodosLists>
                <div className="mini">
                  <CircleTwo
                    onClick={() => arrStatusChecker(item.id)}
                    completed={item.completed}
                  >
                    {item.completed ? <img src={check} alt="" /> : null}
                  </CircleTwo>
                  <Parag>{item.todo}</Parag>
                </div>
                <img src={cross} alt="" onClick={() => deleteTodo(item.id)} />
              </TodosLists>
            ))}
          <InfoDiv>
            <span>{count} items left</span>
            <span onClick={CompletedDeleter}>Clear Completed</span>
          </InfoDiv>
        </TodoDiv>
        <Notifications>
          <span className="all" onClick={() => setSelector("all")}>
            All
          </span>
          <span onClick={() => setSelector("active")}>Active</span>
          <span onClick={() => setSelector("completed")}>Completed</span>
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
`;

const Circle = styled.div<{ done: boolean }>`
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid #e3e4f1;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 5%;
  background: ${(props) =>
    props.done ? "linear-gradient(135deg, #5DF 0%, #C058F3 100%)" : "#fff"};
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const InputDiv = styled.div`
  position: relative;
`;
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
  &:hover {
    cursor: pointer;
  }
  & .mini {
    display: flex;
    justify-content: space-between;
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

const CircleTwo = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.completed
      ? "linear-gradient(135deg, #5DF 0%, #C058F3 100%)"
      : "#fff"};
  width: 2rem;
  height: 2rem;
  border: 1px solid #e3e4f1;
  border-radius: 50%;
  &:hover {
    fill: #fff;
    stroke-width: 1px;
    stroke: #000;
    filter: drop-shadow(0px 1px 2px #000);
  }
`;
