import TopBar from "./components/TopBar/TopBar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import style from "./app.css"

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <AppRouter  />
    </BrowserRouter>
  );
}

export default App;
