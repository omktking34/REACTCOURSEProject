// ^ Part 1 - Intro to React(Question 1):
const directory = document.getElementById("root");

// ?Create a root.
const root = ReactDOM.createRoot(directory);

// ?Define your JSX elements within a parent element.
// const Greeting = (
//   <div>
//     <h1>Hello, my name is Omar Kotb</h1>
//     {/* Comment goes here */}
//     <p>Hello, Omar!</p>
//   </div>
// );

// ?Render the JSX element to the root.
// root.render(Greeting);

// *(Question 1)
// ^ Part 1 - Document a render function from the root directory:
// const c = document.getElementById("root");
// const root = ReactDOM.createRoot(c);

// ^ Part 2 - Rendering (React) Question(2):
// ? - ACCESS THE (UL) with (Li) methods:
// const ul = (
// 	<ul>
// 		<li>Hi 1</li>
// 		<li>Hi 2</li>
// 	</ul>
// );
// root.render(ul);

// ^ Part 3 - Navigation Render (React):
//? root.render(<Navbar />, directory);


// ^ Part 2 - Access REACT Formation - Important keys:
// * Current Status of React Course: ()
//? What are React Important Areas?

//? Composable
//* A software or system is said to be "composable" if it can be broken down into smaller, self-contained modules, which can be independently developed, tested, and deployed.
//* These components can then be combined in multiple ways to create different functional applications from a set of reusable components.

// ? Declarative
//* A software that executes tasks as instructed (like inputting a specific key point)

// ? Imperative
//* A software that breaks down processes step by step to reach a certain level (like describing the program's operations)

root.render(<h1>Hello, React!</h1>, directory);

// *(Question 2)
// ? Recreate the line of code above in vanilla js by creating and appending the h1 element in div#root (without using innerHTML)


// *1- Create a new h1 element

// *2- Give it some textContent
// *3- Give it a class name of "header"
// *4- append it as a child of the div#root


