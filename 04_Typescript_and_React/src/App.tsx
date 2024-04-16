// import Component from "./01-return";
import Component from "./02-props";

export default function App() {
  return (
    <main>
      <Component name="John Doe" id={123}>
        Hello World ! I am a text children
        <p>I'm a paragraph children</p>
      </Component>
      <Component name="Jana Doe" />
    </main>
  );
}
