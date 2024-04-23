import React from "react";

//BUTTON WITH NO FUNCTION

// export default function Button() {
//   return <button>I don't do anything</button>;
// }

//BUTTON WITH A FUNCTION (ALERT)

// const Button = () => {
//   function handleClick() {
//     alert("You clicked me!");
//   }

//   return <button onClick={handleClick}>Click me</button>;
// };

// export default Button;

//PROPS IN EVENT HANDLERS

// function AlertButton({ message, children }) {
//   return <button onClick={() => alert(message)}>{children}</button>;
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Movie is playing!">Play Movie</AlertButton>
//       <AlertButton message="Image is uploading!">Upload Image</AlertButton>
//       <AlertButton message="Clicked!">Click</AlertButton>
//     </div>
//   );
// }

//EVENT HANDLERS AS PROPS

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
// }

// function UploadButton() {
//   return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }

//NAME EVENT HANDLER PROPS

// function Button({ onSmash, children }) {
//   return <button onClick={onSmash}>{children}</button>;
// }

// export default function App() {
//   return (
//     <div>
//       <Button onSmash={() => alert("Playing!")}>Play Movie</Button>
//       <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
//     </div>
//   );
// }

//TWO COMPONENTS

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert("Playing!")}
//       onUploadImage={() => alert("Uploading!")}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>Play Movie</Button>
//       <Button onClick={onUploadImage}>Upload Image</Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

//EVENT PROPAGATION - TWO ALERTS

// export default function Toolbar() {
//   return (
//     <div
//       className="Toolbar"
//       onClick={() => {
//         alert("You clicked on the toolbar!");
//       }}
//     >
//       <button onClick={() => alert("Playing!")}>Play Movie</button>
//       <button onClick={() => alert("Uploading!")}>Upload Image</button>
//     </div>
//   );
// }

//STOPPING PROPAGATION - the toolbar alert only appears when clicking the toolbar, not when clicking a button

// function Button({ onClick, children }) {
//   return (
//     <button
//       onClick={(e) => {
//         e.stopPropagation();
//         onClick();
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div
//       className="Toolbar"
//       onClick={() => {
//         alert("You clicked on the toolbar!");
//       }}
//     >
//       <Button onClick={() => alert("Playing!")}>Play Movie</Button>
//       <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
//     </div>
//   );
// }

//PREVENTING DEFAULT BEHAVIOR

// export default function Signup() {
//   return (
//     <form onSubmit={() => alert("Submitting!")}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
