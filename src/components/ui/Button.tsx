type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button
      className="
        px-4
        py-2
        rounded-lg
        bg-blue-600
        hover:bg-blue-700
        transition
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default Button;