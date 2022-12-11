import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { store } from "../redux/store";

export const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;