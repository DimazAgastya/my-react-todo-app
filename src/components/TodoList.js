import React from "react";
import TodoItem from "./TodoItem";
import Heading from "./heading";

const TodoList = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="todo-list">
					<Heading />
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className="form-check"></div>
						</li>
					</ul>
					<ul className="list-group list-group-flush">
						{props.items.map((item, i) => (
							<TodoItem item={item} key={i} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
