import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./RED";

export const useAS = useSelector.withTypes<RootState>();
export const useAD = useDispatch.withTypes<AppDispatch>();


