export default function Input({
  type = "text",
  name,
  onChange,
  value,
}) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}
