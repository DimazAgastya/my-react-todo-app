import TodoList from "../src/components/TodoList";

function App() {
	// taruh items disini

	const items = [
		{
			id: 1,
			text: "Membuang sampah",
			completed: true,
		},
		{
			id: 2,
			text: "Membuat Roti",
			completed: false,
		},
		{
			id: 3,
			text: "Belajar React",
			completed: false,
		},
	];

	// setelah row beri items untuk menunjukan hasil

	return (
		<div className="container">
			<div className="row">
				<TodoList items={items} />
			</div>
		</div>
	);
}

export default App;
