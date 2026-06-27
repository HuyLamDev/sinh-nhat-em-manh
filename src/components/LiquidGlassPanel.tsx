import type { ComponentPropsWithoutRef, ReactNode } from "react";

type LiquidGlassPanelProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  variant?: "soft" | "strong" | "pill";
};

export function LiquidGlassPanel({
  children,
  className = "",
  variant = "soft",
  ...props
}: LiquidGlassPanelProps) {
  return (
    <div
      className={`liquid-glass liquid-glass--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
