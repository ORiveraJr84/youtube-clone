import "./app.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header></Header>
      <div className="app__page">
        <Sidebar></Sidebar>
        <RecommendedVideos></RecommendedVideos>
      </div>
    </div>
  );
}

export default App;
