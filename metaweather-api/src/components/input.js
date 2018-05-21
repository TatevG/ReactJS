import React from "react";

const Input = ({ clickHandler, changeHandler }) => (
	<div >
		<input type="text" name="city" placeholder="City..." onChange={changeHandler}/>
		<button onClick = {clickHandler}>Get Weather</button>
	</div>
);

export default Input;
