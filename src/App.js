import './App.css';


const Person = () => {
  return (
      <>
      <h1>Name : John</h1>
        <h2>Last Name: Doe</h2>
          <h2>Age : 30</h2>
      </>
  )
}


function App() {
const isUserLoggedIn = true;
  return (
    <div className="App">
    <h1>{isUserLoggedIn ? (<>
      <h1>Logged in</h1>
            <Person></Person>
    </>) :
        (<>
        <h1>Not Logged In</h1>
          <h2>Login Form</h2>
        </>)}</h1>

    </div>
  );
}

export default App;
