"use client";

import { $, useThemeContext, useThemeVariantContext } from "@axolotl-ui/core";

const Page = () => {
  const { theme } = useThemeContext();
  const { setThemeVariant } = useThemeVariantContext();

  setTimeout(() => {
    setThemeVariant("light");
  }, 2000);

  return (
    <div>
      <h1
        css={{
          color: $(theme.colors.primary.vibrant),
          fontSize: "50px",
        }}
      >
        Page
      </h1>
    </div>
  );
};

export default Page;
