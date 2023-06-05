import { useMemberstack } from "@memberstack/react";
import "./styles.css";

export default function App() {
  const memberstack = useMemberstack();

  /*
    You can use Memberstack's methods, such as
    memberstack.getPlans()
    memberstack.loginMemberEmailPassword({...})
    memberstack.openModal("LOGIN")
  */

  return (
    <div className="App">
      <h1>
        <code>@memberstack/react</code>
      </h1>
      <h2>Start using Memberstack with React!</h2>
    </div>
  );
}
