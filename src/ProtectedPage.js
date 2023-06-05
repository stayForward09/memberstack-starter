import { MemberstackProtected } from "@memberstack/react";
import "./styles.css";

export default function ProtectedPage() {
  return (
    <MemberstackProtected>
      <h1>You can only see this if you're logged in!</h1>
    </MemberstackProtected>
  );
}
