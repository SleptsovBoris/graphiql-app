"use client";
import styles from "./page.module.scss";

import { useAuth } from "@/features/auth/model/useAuth";
import { GuestHome } from "@/widgets/Home";
import { AuthorizedHome } from "@/widgets/Home/ui/AuthorizedHome";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className={styles.homeContent}>
      {user?.email ? <AuthorizedHome email={user.email} /> : <GuestHome />}
    </div>
  );
}
