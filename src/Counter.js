import { useDispatch, useSelector } from "react-redux"
import { CounterSlice } from "./slice";
import styled from "styled-components";

const CounterDiv = styled.div`
  width:1000px;
  margin:0 auto;
  display:flex;
  justify-content: center;
  align-items: center;

  & > button {
    margin: 0 10px
  }
`;

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.v);

  return (
    <CounterDiv>
      <button onClick={() => dispatch(CounterSlice.actions.down(1))}>down</button>
      <div>{`Counter : ${count}`}</div>
      <button onClick={() => dispatch(CounterSlice.actions.up(1))}>up</button>
    </CounterDiv>
  )
}