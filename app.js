// Vanilla JS
// const app = document.querySelector("#app");
// app.textContent = "Hellooo";
// const h1 = document.createElement("h1");
// h1.textContent = "Hello World";
// app.appendChild(h1);

// jQuery
// const h2 = $("<h2>").text("What is this");
// $("#app").append(h2);

// React
const app = document.querySelector("#app");
// const item1 = React.createElement("li", null, "My first item");
// const ol = React.createElement("ol", null, item1);
// ReactDOM.render(ol, app);

// JSX
// const list = (
// 	<ol>
// 		<li>Item 1</li>
// 		<li>Item 2</li>
// 	</ol>
// );

// const hi = <h1>Hello!</h1>;

// function Hello() {
// 	return <h1>Hello, apple in a component</h1>;
// }
// ReactDOM.render(<Hello />, app);

function Child(props) {
	return (
		<p>
			Hi, my name is {props.name} and I am {props.age} years old.
		</p>
	);
}

// function Parent() {
// 	return (
// 		<div>
// 			<Child name="Alice" age={9} />
// 			<Child name="Bob" age={12} />
// 		</div>
// 	);
// }

class Parent extends React.Component {
	constructor() {
		super();
		this.state = {
			aliceAge: 9,
			bobAge: 12
		};
	}
	// changeAge() {
	// 	const newAge = Math.floor(Math.random() * 10);
	// 	// this.state.aliceAge = newAge // incorrect
	// 	this.setState({ aliceAge: newAge });
	// }
	changeAge = () => {
		const newAge = Math.floor(Math.random() * 10);
		// this.state.aliceAge = newAge // incorrect
		this.setState({ aliceAge: newAge });
	};
	render() {
		return (
			<div>
				<Child name="Alice" age={this.state.aliceAge} />
				<Child name="Bob" age={this.state.bobAge} />

				<button onClick={this.changeAge.bind(this)}>Click to change Age</button>
			</div>
		);
	}
}

ReactDOM.render(<Parent />, app);
