"use client";

import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

type Props = {
  url: string;
  setUrl: (value: string) => void;
  sdlUrl: string;
  setSdlUrl: (value: string) => void;
};

export const EndpointInputs = ({ url, sdlUrl, setSdlUrl, setUrl }: Props) => {
  const t = useTranslations();
  return (
    <>
      <div className={styles.inputGroup}>
        <label>{t("endpoint-URL")}:</label>
        <input
          type="text"
          placeholder={t("enter-endpoint-URL")}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>{t("sdl-url")}:</label>
        <input
          type="text"
          placeholder={t("enter-sdl-url")}
          value={sdlUrl}
          onChange={(e) => setSdlUrl(e.target.value)}
        />
      </div>
    </>
  );
};
