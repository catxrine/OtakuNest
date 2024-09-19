import { BASE_URL } from "./utils";
import { useFetch } from "./helpers";

function App() {
  const getRoute = () => {
    useFetch({
      url: `${BASE_URL}auth/register`,
      method: "POST",
      body: {
        username: "CA",
        email: "email@gmail.com",
        password: "nicZ099999999$",
      },
    });
  };
  getRoute();

  return <>Test</>;
}
export default App;
