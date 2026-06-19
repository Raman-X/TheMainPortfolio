import { ReactNode } from "react";

export function MotionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`stagger-on-mount ${className ?? ""}`}>
      {children}
    </div>
  );
}
