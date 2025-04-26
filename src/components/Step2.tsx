import { useMemo } from "react";
import { useFormContext } from "../context";

const Step2 = () => {
  const [form, setForm] = useFormContext();
  const isReadOnly = form.readonlySteps.includes(2);
  const fieldName = useMemo(
    () => (form.type === "email" ? "email" : "phone"),
    [form.type]
  );
  return (
    <div className="space-x-4.5">
      <input
        autoFocus
        required
        type={form.type}
        name={fieldName}
        placeholder={`Enter ${fieldName}`}
        className="border border-gray-50 rounded-md px-3 py-2"
        value={form.value}
        onChange={(e) => {
          setForm((prev) => ({ ...prev, value: e.target.value }));
          e.currentTarget.setCustomValidity("");
        }}
        pattern={form.type === "tel" ? "[0-9]{10}" : undefined}
        onInvalid={(e) => {
          if (form.type === "tel") {
            e.currentTarget.setCustomValidity(
              "Please enter a valid 10-digit phone number"
            );
          } else {
            e.currentTarget.setCustomValidity(
              "Please enter a valid email address"
            );
          }
        }}
        readOnly={isReadOnly}
        disabled={isReadOnly}
      />
      <button type="submit" disabled={isReadOnly}>
        Send OTP
      </button>
    </div>
  );
};

export default Step2;
