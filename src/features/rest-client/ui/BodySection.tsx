import styles from "./styles.module.scss";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
};

export const BodySection = ({ label, placeholder, value, onChange }: Props) => {
  return (
    <div className={styles.bodySection}>
      <label>{label}:</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={() => onChange}
      ></textarea>
    </div>
  );
};
