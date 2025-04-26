import { useState } from "react";
import { FormContext } from "./context";
import { FormType } from "./types";
import { Form, BrowserRouter as Router } from "react-router-dom";
import { INITIAL_FORM } from "./utils";

function App() {
  const [form, setForm] = useState<FormType>(INITIAL_FORM);

  return (
    <FormContext.Provider value={[form, setForm]}>
      <Router>
        <div className="text-center py-10 space-y-5">
          <h1>OTP Form</h1>
          <Form />
        </div>
      </Router>
    </FormContext.Provider>
  );
}

export default App;
