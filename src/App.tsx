import { useState } from "react";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert
          children="My alert message"
          onClose={() => {
            setAlertVisibility(false);
          }}
        />
      )}
      <Button
        onClick={() => {
          setAlertVisibility(!alertVisibility);
        }}
        children="My Primary Button"
        color="secondary"
      />
    </div>
  );
}

export default App;
