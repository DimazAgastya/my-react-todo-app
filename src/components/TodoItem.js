import React from "react";

const TodoItem = (props) => {
	const items = [
		{
			id: 1,
			text: "Membuang sampah",
			completed: true,
		},
		{
			id: 2,
			text: "Membuat rotu",
			completed: false,
		},
		{
			id: 3,
			text: "Belajar React",
			completed: false,
		},
	];

	return (
		<>
			<li className="list-group-item">
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value={props.item.completed} checked={props.item.completed} readOnly id="todo-item-check-1" />
					<label className="form-check-label" htmlFor="todo-item-check-1">
						{props.item.text}
					</label>
				</div>
			</li>
		</>
	);
};

export default TodoItem;
