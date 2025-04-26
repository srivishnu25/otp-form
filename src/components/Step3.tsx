import OTPInput from "react-otp-input";
import { useFormContext } from "../context";

const Step3 = () => {
  const [form, setForm] = useFormContext();
  return (
    <OTPInput
      value={form.otp}
      onChange={(e) => {
        setForm((prev) => ({ ...prev, otp: e }));
      }}
      inputType="number"
      numInputs={4}
      renderInput={(props, index) => (
        <input
          {...props}
          autoFocus={index === 0}
          required
          className="border border-gray-50 rounded text-6xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      )}
      containerStyle={{
        justifyContent: "center",
        gap: 24,
      }}
    />
  );
};

export default Step3;
