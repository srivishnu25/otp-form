import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ErrorPage from "../ErrorPage";
import NavButtons from "./NavButtons";
import { INITIAL_FORM } from "../utils";
import useFormStep from "../hooks/useFormStep";
import { useFormContext } from "../context";

const Form = () => {
  const [form, setForm] = useFormContext();
  const { next } = useFormStep();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pathname !== "/step-3") {
      next();
      return;
    }

    if (!e.currentTarget.checkValidity()) return;

    alert(JSON.stringify(form));
    setForm(INITIAL_FORM);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step-1" element={<Step1 />} />
        <Route path="/step-2" element={<Step2 />} />
        <Route path="/step-3" element={<Step3 />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div className="">
        <NavButtons />
      </div>
    </form>
  );
};

export default Form;
