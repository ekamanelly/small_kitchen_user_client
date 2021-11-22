import { useRouter } from "next/router";
import LottieAnimation from "../components/animation/lottieAnimation";
import useAuth from "./auth.hook";
import loading from "../public/animation/loading.json";

export const withPublic = (Component: any) => {
  return function WithPublic(props: any) {
    const auth = useAuth();
    const router = useRouter();
    console.log({ user: auth.user });
    if (auth.user !== null) {
      setTimeout(() => router.replace("/dashboard"), 1800);
      return <LottieAnimation lotti={loading} height={600} width={600} />;
    }
    return <Component auth={auth} {...props} />;
  };
};

export const withProtect = (Component: any) => {
  return function withProtect(props: any) {
    const auth = useAuth();
    const router = useRouter();
    if (auth.user === null) {
      // router.replace("/");
      setTimeout(() => router.replace("/"), 1800);
      return <LottieAnimation lotti={loading} height={600} width={600} />;
    }
    return <Component auth={auth} {...props} />;
  };
};
