import React from "react";

function Header() {
  return (
    <header className="block_header">
      <p>WELCOME TO THIS COURSE!</p>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />

      <main className="block">
        <p>
          React (also known as React.js or ReactJS) is a free and open-source
          front-end JavaScript library for building user interfaces based on
          components.
        </p>

        <p>You can find the React doc at https://react.dev/</p>
      </main>
    </>
  );
}

export default App;
