type InputProps = {
  type?: string;
  placeholder?: string;
};

function Input({
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        p-3
        rounded-lg
        border
        border-slate-600
        bg-slate-800
      "
    />
  );
}

export default Input;