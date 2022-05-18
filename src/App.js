import TodoList from "../src/components/TodoList";

function App() {
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
		<div className="container">
			<div className="row">
				<TodoList items={items} />
			</div>
		</div>
	);
}

export default App;
