import { useRouter } from "next/router";
import useAuth from "./auth.hook";

export const withPublic = (Component: any) => {
  return function WithPublic(props: any) {
    const auth = useAuth();
    const router = useRouter();
    console.log({ user: auth.user });
    if (auth.user !== null) {
      router.replace("/dashboard");
      return <h1>Loading......</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
};

export const withProtect = (Component: any) => {
  return function withProtect(props: any) {
    const auth = useAuth();
    const router = useRouter();
    if (auth.user === null) {
      router.replace("/");
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
};
