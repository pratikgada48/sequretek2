import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>
        Oops! <i>404 Page {error.statusText || error.message}</i>
      </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button>Go to Homepage</button>
    </div>
  );
}
