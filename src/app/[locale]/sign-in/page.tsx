import dynamic from "next/dynamic";

import { Loader } from "@/shared/ui/Loader";

const SignInPage = dynamic(
  () => import("@/features/auth/ui/SignInForm/SignInForm"),
  {
    ssr: true,
    loading: () => <Loader />,
  },
);

export default SignInPage;
