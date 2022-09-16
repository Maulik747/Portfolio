
import Introduction from "./components/introduction/Introduction"
import About from "./components/about/About"
import Projectlist from "./components/projectlist/Projectlist"
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
function App() {
  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode


  return (
  <div style={{backgroundColor: darkMode? '#222':"white", color: darkMode&&"white"}}> 
     <Toggle/> 
     <Introduction/>
     <About/>
     <Projectlist/>
  </div>
  );
}
export default App;
