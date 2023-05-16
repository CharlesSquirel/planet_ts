interface BreakProps {
  maxTablet: string;
  minDesktop: string;
  maxMobile: string;
}

interface ThemeProps {
  break: BreakProps;
}

export const theme: ThemeProps = {
  break: {
    maxTablet: "1213px",
    minDesktop: "1024px",
    maxMobile: "800px",
  },
};
