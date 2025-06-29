```javascript
import React from "react";
import CreatableSelect from "react-select/creatable";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
];

const MyCreatableSelect = () => {
  const handleChange = (newValue) => {
    console.log("Selected:", newValue);
  };

  const handleCreate = (inputValue) => {
    console.log("New Option Created:", inputValue);
  };

  return (
    <CreatableSelectisClearable
      onChange={handleChange}
      onCreateOption={handleCreate}
      options={options}
    />
  );
};

export default MyCreatableSelect;
```

| 속성                            | 설명                                                  |
| ------------------------------- | ----------------------------------------------------- |
| `options`                       | 드롭다운에 표시할 항목 목록 (`{ value, label }` 형식) |
| `onChange`                      | 항목 선택 시 실행할 콜백 함수                         |
| `onCreateOption`                | 새 옵션을 입력하고 엔터칠 때 실행될 콜백              |
| `isClearable`                   | 선택된 항목을 지울 수 있는 ‘X’ 버튼 표시 여부         |
| `defaultValue`                  | 초기 선택된 값 설정                                   |
| `className` / `classNamePrefix` | 커스텀 스타일을 위한 클래스 이름 지정                 |
