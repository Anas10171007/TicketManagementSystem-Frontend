import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-surface p-8 shadow-2xl">
      {children}
    </div>
  );
}

export default Card;