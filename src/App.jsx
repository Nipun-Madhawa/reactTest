import logo from './logo.svg';
import './App.css';
import Counter from './features/Counter';
import Signup from './features/signup/Signup';
import Login from './features/signup/Login';

function App() {
  console.log(localStorage.getItem('username'));
  console.log(localStorage.getItem('password'));
  return (
    <div>
      <Counter></Counter>
    <Signup></Signup>
    <Login></Login>
    </div>
  );
}

export default App;
