import { useState, useEffect, useCallback } from "react";
const url = "https://www.course-api.com/react-tours-project";

export default function Component() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  // more on Tours state

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch tours...`);
      }

      const rawData = await response.json();
      console.log(rawData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "there was an error...";
      setIsError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error: {isError}</h3>;
  }

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
    </div>
  );
}
