import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
// import "./_01_type_annotations";
// import "./_02_type_inference";
// import "./_03_challenge";
// import "./_04_union_types";
// import "./_05_type_any";
// import "./_06_practical_example.ts";
// import "./_07_challenge.ts";
// import "./_08_Arrays";
// import "./_09_challenge.ts";
// import "./_10_objects.ts";
// import "./_11_objects_challenge.ts";
// import "./_12_functions.ts";
// import "./_13_functions_challenges.ts";
// import "./_14_functions_optional_and_default_params.ts";
// import "./_15_function_rest_parameters.ts";
// import "./_16_function_void_keyword.ts";
// import "./_17_function_type_guards.ts";
// import "./_18_function_object_as_parameters.ts";
// import "./_19_function_object_excess_property_check .ts";
// import "./_20_function_challenge.ts";
// import "./_21_types_alias.ts";
// import "./_22_types_alias_challenge.ts";
// import "./_23_intersection_type.ts";
// import "./_24_computed_types_properties.ts";
// import "./_25_interface.ts";
// import "./_26_interface_and_methods.ts";
// import "./_27_interface_and_methods_more_options.ts";
// import "./_28_interface_challenge.ts";
// import "./_29_interface_merging_and_extending";
// import "./_30_interface_challenge";
// import "./_31_type_predicate";
import "./_32_interface_VS_alias";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
