import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full rounded-xl bg-primary px-4 py-3 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;