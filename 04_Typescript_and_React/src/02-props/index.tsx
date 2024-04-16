// type TypeComponentProps = {
//   name: string;
//   id?: number;
//   children?: React.ReactNode;
// };

// function Component({ name, id, children }: TypeComponentProps) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h2>{id}</h2>
//       {children}
//     </div>
//   );
// }
// export default Component;

//---------------------------------------- OR

import { PropsWithChildren } from "react";

type TypeComponentProps = {
  name: string;
  id?: number;
};

function Component({
  name,
  id,
  children,
}: PropsWithChildren<TypeComponentProps>) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{id}</h2>
      {children}
    </div>
  );
}
export default Component;
