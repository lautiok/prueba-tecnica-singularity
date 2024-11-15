import style from "./validatedinput.module.css";

export const ValidatedInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className={style.inputWrapper}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${style.input} ${error ? style.inputError : ""}`}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
