import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const RevealDishes = atom({
  key: "RevealDishes", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export const isLoading = atom({
  key: "isLoading", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export const RevealForm = atom({
  key: "RevealForm", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const BusinessDetails = atom({
  key: "BusinessDetails", // unique ID (with respect to other atoms/selectors)
  default: {
    companyName: "Burnout Grill",
    phone: "07082571949",
    state: "Lagos",
    country: "Nigeria",
    description: "we've served Angels, but we feed human now. taste and see! ",
  }, // default value (aka initial value)
});
