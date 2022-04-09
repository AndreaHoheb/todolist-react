import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todoArray, setTodoArray] = useState([]);

	let mappedTodoArray = todoArray.map((chore, index) => {
		return (
			<div className="added-chores">
				<div className="list">
					<li>{chore}</li>
				</div>
				<div className="trash">
					<button onClick={() => removeTask(index)}>
						<i class="far fa-trash-alt"></i>
					</button>{" "}
				</div>
			</div>
		);
	});

	function removeTask(i) {
		let filtered = todoArray.filter((chore, index) => i != index);
		setTodoArray(filtered);
	}

	return (
		<div className="header">
			<h1 className="text-center mt-5"> To Do List</h1>
			<div className="text-center mt-5">
				<input
					id="newTask"
					type="text"
					placeholder="Chores To Do"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							setTodoArray([...todoArray, inputValue]);
							setInputValue("");
						}
					}}
				/>
				<button>
					<i class="far fa-trash-alt"></i>
				</button>
				<div className="chores">
					<ul className="text-center md-2">{mappedTodoArray}</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
