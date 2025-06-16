import { useState } from "react";
import Search from "./Components/Search";
import Foodlist from "./Components/foodlist";
import Nav from "./Components/nav";
import "./App.css";
import Outercontainer from "./Components/Ocontainer";
import Innercontainer from "./Components/Icontainer";
function App() {
  const [fooddata, setfooddata] = useState([]);

  return (
    <div>
      <Nav />
      <Search fooddata={fooddata} setfooddata={setfooddata} />
      <Outercontainer>
        <Innercontainer>
          <Foodlist fooddata={fooddata} />
        </Innercontainer>
      </Outercontainer>
    </div>
  );
}
export default App;
