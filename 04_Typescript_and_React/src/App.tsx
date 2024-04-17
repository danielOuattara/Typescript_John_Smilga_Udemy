// import Component from "./01-return";
// import Component from "./02-props";
// import Component from "./03-state";
import Component from "./05-challenge";

export default function App() {
  return (
    <main>
      <Component type="basic" name="Susan" />
      <Component type="advanced" name="Anna" email="anna@email.com" />
    </main>
  );
}
