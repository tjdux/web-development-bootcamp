import CreatableSelect from "react-select/creatable";
import { cityOptions } from "../data";
import { SelectWrapper } from "../styles";

const CitySelect = () => {
  return (
    <SelectWrapper>
      <CreatableSelect
        isClearable
        options={cityOptions}
        defaultInputValue={null}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectWrapper>
  );
};

export default CitySelect;
