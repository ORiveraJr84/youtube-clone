import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <h1>This is my Youtube clone!🚀</h1>
      <Header></Header>
      <Sidebar></Sidebar>
      <RecommendedVideos></RecommendedVideos>
    </div>
  );
}

export default App;
