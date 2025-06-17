import { useState } from "react";
import Search from "./Components/Search";
import Foodlist from "./Components/foodlist";
import Nav from "./Components/nav";
import "./App.css";
import Outercontainer from "./Components/Ocontainer";
import Innercontainer from "./Components/Icontainer";
import Fooddetails from "./Components/Fooddetails";
function App() {
  const [fooddata, setfooddata] = useState([]);
  const [foodid,setfoodid]=useState("641893")

  return (
    <div>
      <Nav />
      <Search fooddata={fooddata} setfooddata={setfooddata} />
      <Outercontainer>
        <Innercontainer>
          <Foodlist setfoodid={setfoodid} fooddata={fooddata} />
        </Innercontainer>
        <Innercontainer>
          <Fooddetails foodid={foodid}/>
        </Innercontainer>
      </Outercontainer>
    </div>
  );
}
export default App;
