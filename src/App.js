import './App.css';

function App() {
const isUserLoggedIn = false;
  return (
    <div className="App">
    <h1>{isUserLoggedIn ? (<>
      <h1>Logged in</h1>
    </>) :
        (<>
        <h1>Not Logged In</h1>
          <h2>Login Form</h2>
        </>)}</h1>

    </div>
  );
}

export default App;
