import { AppDispatch } from "@/app/_providers/store/storeConfig/storeConfig";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();