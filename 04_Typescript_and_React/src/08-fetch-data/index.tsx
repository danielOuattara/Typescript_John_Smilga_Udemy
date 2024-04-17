import FetchDefinedTypes from "./FetchUserDefinedTypes";
import FetchZod from "./FetchZod";
import FetchValibot from "./FetchValibot";

const url = "https://www.course-api.com/react-tours-project";

export default function Component() {
  return (
    <>
      <FetchDefinedTypes url={url} />
      <FetchZod url={url} />
      <FetchValibot url={url} />
    </>
  );
}
