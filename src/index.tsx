import { createRoot } from "react-dom/client";
import EventComponent from "./events/EventComponent";

const container = document.querySelector("#root");
const root = createRoot(container!);

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  );
};

root.render(<App />);
