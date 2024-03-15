import { useContext } from "react";
import { PageControlContext } from "../contexts/PageControlContext";

export const usePageControlContext = () => {
  const pageControlContext = useContext(PageControlContext);

  if (pageControlContext === undefined) {
    throw new Error("usePageControlContext must be used within a Provider");
  }
  return pageControlContext;
};
