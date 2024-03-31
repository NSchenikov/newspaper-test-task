import { useState, useEffect } from "react";
import { getPosts } from "./API";
import "./App.css";

function App() {
  let [errorMessage, setErrorMessage] = useState("");

  const errorProcessing = (error) => {
    // setIsLoading(false);
    // setPosts([]);
    setErrorMessage("Something get wrong. Please, try again later");
    if (error.response && error.response.status === 401) {
      console.error(
        "Ошибка аутентификации: Некорректная авторизационная строка",
      );
    } else {
      console.error("Ошибка при получении данных: ", error);
    }
  };

  useEffect(() => {
    getPosts().catch((error) => {
      errorProcessing(error);
    });
  }, []);

  return (
    <div className="App">
      {errorMessage ? <div>${errorMessage}</div> : ""}
      <div className="container">
        <ul className="comments"></ul>
      </div>
    </div>
  );
}

export default App;
