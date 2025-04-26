import { useFormContext } from "../context";

const Step1 = () => {
  const [form, setForm] = useFormContext();
  const isReadOnly = form.readonlySteps.includes(1);
  return (
    <div className="space-x-5">
      <label>
        <input
          type="radio"
          checked={form.type === "tel"}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              type: e.target.checked ? "tel" : "email",
              value: "",
            }))
          }
          name="option"
          className="mr-1"
          readOnly={isReadOnly}
          disabled={isReadOnly}
        />
        Phone
      </label>
      <label>
        <input
          type="radio"
          name="option"
          className="mr-1"
          checked={form.type === "email"}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              type: e.target.checked ? "email" : "tel",
              value: "",
            }))
          }
          readOnly={isReadOnly}
          disabled={isReadOnly}
        />
        Email
      </label>
    </div>
  );
};

export default Step1;
