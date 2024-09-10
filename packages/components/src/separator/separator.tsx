"use client";

import type React from "react";

import { css, cn, useOptions } from "@axolotl-ui/core";

import type { SeparatorProps } from "@/separator/types";

const separatorStyles = css({
  backgroundColor: "$border",

  position: "relative",
  display: "flex",

  justifyContent: "center",
  alignItems: "center",

  transitionProperty: "color, background-color, border-color",
  transitionDuration: "300ms",
  transitionTimingFunction: "ease-in-out",

  variants: {
    orientation: {
      horizontal: {
        height: "$025",
        width: "100%",

        marginY: "$4",
      },
      vertical: {
        width: "$025",
        height: "100%",

        marginX: "$4",
      },
    },
  },
});

export const Separator: React.FC<SeparatorProps> = (
  separatorProps: SeparatorProps,
): React.ReactNode => {
  const {
    options: { components },
  } = useOptions();

  const {
    children,
    className,
    orientation = "horizontal",
    ...props
  }: SeparatorProps = {
    ...components.all,
    ...components?.Separator,
    ...separatorProps,
  };

  return (
    <div
      {...props}
      className={cn(
        separatorStyles({ orientation }),
        components?.all?.className,
        components?.Separator?.className,
        className,
      )}
      aria-orientation={orientation}
    >
      {children}
    </div>
  );
};
Separator.displayName = "Separator";
