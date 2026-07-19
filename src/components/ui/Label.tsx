type LabelProps = {
  children: React.ReactNode;
};

function Label({ children }: LabelProps) {
  return (
    <label
      className="
        block
        text-sm
        font-medium
        mb-2
      "
    >
      {children}
    </label>
  );
}

export default Label;