import './App.css';
import Header from './Pages/Header';
import RestaurantCard from './Pages/Restaurant';
import User from './Pages/User';
import UserClass from './Pages/UserClass';

function App() {
  return (
    <div className="App">
      <Header/>
      <RestaurantCard/>
      <User name = {"Ashutosh Mishra (function)"} age = {"22"}/>
      <UserClass name = {"Ashutosh Mishra(class)"} age = {"22"}/>
    </div>
  );
}

export default App;
