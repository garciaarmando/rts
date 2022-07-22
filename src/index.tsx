import { createRoot } from "react-dom/client";
// import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const container = document.querySelector("#root");
const root = createRoot(container!);

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

root.render(<App />);
