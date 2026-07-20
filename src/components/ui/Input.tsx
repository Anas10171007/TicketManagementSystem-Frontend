import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-slate-700 bg-surface px-4 py-3 outline-none transition-all duration-200 placeholder:text-text-muted focus:border-primary",
        className
      )}
      {...props}
    />
  );
}

export default Input;