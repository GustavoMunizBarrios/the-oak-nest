import Select from "./Select";

/* eslint-disable react/prop-types */
export default function SortBy({ options }) {
  function handleChange() {}

  return <Select options={options} type={"white"} onChange={handleChange} />;
}
