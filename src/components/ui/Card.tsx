type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div
      className="
        bg-surface
        rounded-2xl
        shadow-xl
        border
        border-slate-700
        p-8
      "
    >
      {children}
    </div>
  );
}

export default Card;