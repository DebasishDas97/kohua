import { useEffect, useReducer } from "react";
import { CardProps, State, UseFetchReturnType } from "../types/type";
import { makeRequest } from "../makeRequest";

const INITIAL_STATE: State = {
  data: [],
  loading: false,
  error: false,
};

interface Action {
  type: "FETCHING" | "FETCHED" | "ERROR";
  payload?: CardProps | CardProps[] | null; // Replace 'CardProps' with the actual type for your data.
}

function dataReducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCHING": {
      return {
        data: [],
        loading: true,
        error: false,
      };
    }
    case "FETCHED": {
      return {
        data: action.payload || [], // Provide a default value for 'payload' in case it is not present.
        loading: false,
        error: false,
      };
    }
    case "ERROR": {
      return {
        data: [],
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
}

export default function useFetch(url: string): UseFetchReturnType {
  const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCHING" });
        const response = await makeRequest.get(url);
        dispatch({ type: "FETCHED", payload: response.data.data });
      } catch (err) {
        dispatch({ type: "ERROR" });
        console.log(err);
      }
    };
    fetchData();
  }, [url]);


  return { state };
}


