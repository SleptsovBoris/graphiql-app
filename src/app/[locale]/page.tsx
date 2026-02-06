"use client";
import styles from "./page.module.scss";

import { useAuthUser } from "@/features/auth/model/useAuthUser";
import { GuestHome } from "@/widgets/Home";
import { AuthorizedHome } from "@/widgets/Home/ui/AuthorizedHome";

export default function Home() {
  const user = useAuthUser();

  return (
    <div className={styles.homeContent}>
      {user?.email ? <AuthorizedHome email={user.email} /> : <GuestHome />}
    </div>
  );
}
