import { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <section>
      <h2>events example</h2>
      <form action="" className="form">
        <input
          type="text"
          value={text}
          className="form-input mb-1"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="email"
          value={email}
          className="form-input mb-1"
          onChange={handleChange}
        />
      </form>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </section>
  );
}
export default Component;
