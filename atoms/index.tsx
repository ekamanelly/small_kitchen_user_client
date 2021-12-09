import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const RevealForm = atom({
  key: "RevealForm", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
