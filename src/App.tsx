import { useRoutes } from "react-router";
import routes from "./routes/Routes.js";

function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
