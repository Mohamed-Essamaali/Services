import { useLocalStorage } from "./useLocalStorage";

export function useForm(key, initialValues) {
  const [values, setValue] = useLocalStorage(key, initialValues);

  const handleChange = (e) => {
    let value = e.target.type==='checkbox'? e.target.checked: e.target.value;
    setValue({ ...values, [e.target.name]:value });
    console.log("handle change in useform", e.target.name, value);
  };

  return [values, handleChange];
}
