import type React from "react";

import { AxolotlUI } from "@axolotl-ui/core";

import type { Metadata } from "next";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<LayoutProps> = ({
  children,
}: LayoutProps): React.ReactNode => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AxolotlUI>{children}</AxolotlUI>
      </body>
    </html>
  );
};

// export const metadata: Metadata = {
//   title: "AxolotlUI examples",
// };

export default RootLayout;
