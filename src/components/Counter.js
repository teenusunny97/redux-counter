import React from "react";
import { increment,decrement } from "../redux/Actions/Action";
import { useSelector,useDispatch } from "react-redux";
const Counter=()=>{
    const count=useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return(
        <>
        <h2>Counter:{count}</h2>
        <div className="buttonstyle">
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        </>
    )
}
export default Counter;