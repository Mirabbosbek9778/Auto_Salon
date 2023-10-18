import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;
