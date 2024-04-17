import FetchToursUserDefinedTypesUseEffect from "./FetchToursUserDefinedTypesUseEffect";
import FetchToursZodUseEffect from "./FetchToursZodUseEffect";
import FetchToursValibotUseEffect from "./FetchToursValibotUseEffect";
import FetchToursZodReactQuery from "./FetchToursZodReactQuery";
import FetchToursValibotReactQuerry from "./FetchToursValibotReactQuery";

const url = "https://www.course-api.com/react-tours-project";

export default function Component() {
  return (
    <>
      <FetchToursUserDefinedTypesUseEffect url={url} />
      <FetchToursZodUseEffect url={url} />
      <FetchToursValibotUseEffect url={url} />
      <FetchToursZodReactQuery url={url} />
      <FetchToursValibotReactQuerry url={url} />
    </>
  );
}
