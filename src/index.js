import ReactDOM from "react-dom";
import { MemberstackProvider } from "@memberstack/react";

import App from "./App";

function AppWithMemberstack() {
  return (
    <MemberstackProvider config={{ publicKey: "" }}>
      <App />
    </MemberstackProvider>
  );
}

ReactDOM.render(<AppWithMemberstack />, document.getElementById("root"));
