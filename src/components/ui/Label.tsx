import type { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function Label(props: LabelProps) {
  return (
    <label
      className="mb-2 block text-sm font-medium"
      {...props}
    />
  );
}

export default Label;