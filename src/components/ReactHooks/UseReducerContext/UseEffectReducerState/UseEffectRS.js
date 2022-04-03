import axios from "axios";
import React, { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_Success":
      return {
        loading: false,
        error: "",
        post: action.payLoad,
      };
    case "Fetch_Error":
      return {
        loading: false,
        error: "Error Message",
        post: {},
      };
    default:
      return state;
  }
};

function UseEffectRS() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts1/1")
      .then((response) => {
        dispatch({ type: "Fetch_Success", payLoad: response.data });
      })
      .catch((error) => {
        dispatch({ type: "Fetch_Error", payLoad: error });
      });
  }, []);

  return (
    <div>
      <div>UseEffectRS</div>;
      <div>
        {state.loading ? "Loading...." : state.post.title}
        {state.error ? state.error : null}
      </div>
    </div>
  );
}

export default UseEffectRS;
