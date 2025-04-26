import { useLocation, useNavigate } from "react-router-dom";
import { useFormContext } from "../context";

function useFormStep() {
  const navigate = useNavigate();
  const location = useLocation();
  const [_, setForm] = useFormContext();

  const handleStep = (sign: number): void => {
    const currStep =
      location.pathname === "/" ? 1 : +location.pathname.replace("/step-", "");

    // updating previos steps to readonly
    if (sign > 0)
      setForm((prev) => ({
        ...prev,
        readonlySteps: [...prev.readonlySteps, currStep],
      }));

    const step =
      sign > 0 ? Math.min(currStep + 1, 3) : Math.max(currStep - 1, 1);
    navigate(`/step-${step}`);
  };

  return { prev: () => handleStep(-1), next: () => handleStep(1) };
}

export default useFormStep;
