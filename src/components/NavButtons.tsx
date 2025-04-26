import useFormStep from "../hooks/useFormStep";

function NavButtons() {
  const { prev } = useFormStep();

  return (
    <div className="space-x-6">
      <button type="button" onClick={() => prev()}>
        Prev
      </button>
      <button type="submit">Next</button>
    </div>
  );
}

export default NavButtons;
