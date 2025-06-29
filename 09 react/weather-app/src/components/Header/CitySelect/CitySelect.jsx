import CreatableSelect from "react-select/creatable";
import { cityOptions } from "../data";
import { SelectWrapper } from "../styles";
import { useNavigate } from "react-router-dom";

const CitySelect = () => {
  const navigate = useNavigate();

  const handleChange = (newValue) => {
    navigate(`/${newValue.value}`);
  };

  return (
    <SelectWrapper>
      <CreatableSelect
        options={cityOptions}
        defaultInputValue={null}
        onChange={handleChange}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectWrapper>
  );
};

export default CitySelect;
