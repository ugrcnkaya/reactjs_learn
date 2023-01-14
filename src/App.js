import './App.css';


const Person = (props) => {
  return (
      <>
      <h1>Name : {props.name}</h1>
        <h2>Last Name: {props.lastname}</h2>
          <h2>Age : {props.age}</h2>
          <hr />
      </>
  )
}


function App() {
const isUserLoggedIn = true;
  return (
    <div className="App">
    <h1>{isUserLoggedIn ? (<>
      <h1>Logged in</h1>
            <Person  name={'John'} lastname={'Doe'} age={ 35}/>
            <Person />
            <Person />
            <Person />


    </>) :
        (<>
        <h1>Not Logged In</h1>
          <h2>Login Form</h2>
        </>)}</h1>

    </div>
  );
}

export default App;
