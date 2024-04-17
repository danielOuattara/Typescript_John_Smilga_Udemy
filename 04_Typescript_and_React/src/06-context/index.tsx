import ThemeContextProvider, { useThemeContext } from "./Context";

export default function ParentComponent() {
  return (
    <ThemeContextProvider>
      <Component />
    </ThemeContextProvider>
  );
}

//-------------------

export function Component() {
  const context = useThemeContext();
  console.log("context = ", context);
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
    </div>
  );
}

/* 

import Component from "./06-context";

export default function App() {
  return (
    <main>
      <Component />
    </main>
  );
}

*/
