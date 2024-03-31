import { useState, useEffect } from "react";
import { getPosts } from "./API";
import { PostsList } from "./components/postsList";
import "./App.css";

function App() {
  let [errorMessage, setErrorMessage] = useState("");
  let [posts, setPosts] = useState('');

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
    getPosts()
    .then((res) => {
      setPosts(res.data);
    })
    .catch((error) => {
      errorProcessing(error);
    });
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts])

  return (
    <div className="App">
      {errorMessage ? <div>${errorMessage}</div> : ""}
      <div className="container">
        <ul className="comments">
          <PostsList 
            posts={posts}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
