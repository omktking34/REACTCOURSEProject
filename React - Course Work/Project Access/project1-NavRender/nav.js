function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href=" #">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false "
				aria-label="Toggle navigation"
			></button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto"></ul>
				<li className="nav-item active">
					<a className="nav-link" href=" # ">
						Home <span className="sr-only">(current)</span>
					</a>
				</li>

				<li className="nav-item">
					<a className="nav-link" href="# ">
						Link
					</a>
				</li>

				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Dropdown
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<div className="dropdown-divider"></div>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</li>
				<li className="nav-item">
					<a
						className="form-control mr-sm 2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit"
					>
						Search
					</button>
				</li>
			</div>
		</nav>
	);
}

const directory = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(directory);

// root.render(
// 	<div>
// 		<Navbar />
// 	</div>,
// 	directory
// );

// ? Create a React Function Component and call it "MainContent",
// TODO
function MainContent() {
	return <h1>I'am Learning React!</h1>;
}
// & and have it return an (h1) element that inputs ("I'am learning React!")
//& Rendering - means that we are (placing certain text in the inner html access below the lines)
// TODO
root.render(
	<div>
		<Navbar />
		<MainContent />
	</div>,
	directory
);

