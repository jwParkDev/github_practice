import { useDispatch, useSelector } from "react-redux"
import { CounterSlice } from "./slice";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.v);

  return (
    <div>
      <button onClick={() => dispatch(CounterSlice.actions.down(1))}>down</button>
      <div>{count}</div>
      <button onClick={() => dispatch(CounterSlice.actions.up(1))}>up</button>
    </div>
  )
}