import dynamic from "next/dynamic";

import { Loader } from "@/shared/ui/Loader";

const SignUpPage = dynamic(
  () => import("@/features/auth/ui/SignUpForm/SignUpForm"),
  {
    ssr: true,
    loading: () => <Loader />,
  },
);

export default SignUpPage;
