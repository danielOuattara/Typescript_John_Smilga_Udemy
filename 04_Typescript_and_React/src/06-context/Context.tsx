import { createContext, useContext } from "react";

const ThemeContext = createContext<string | undefined>(undefined);

type TypeProps = {
  children: React.ReactNode;
};

export default function ThemeContextProvider({ children }: TypeProps) {
  return (
    <ThemeContext.Provider value={"hello"}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(`context must be used inside ThemeContextProvider`);
  }

  return context;
};
