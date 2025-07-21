import { useState } from "react";
import { useTodoDispatch } from "../App";

function Editor() {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onButtonClick = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onButtonClick}>추가</button>
    </div>
  );
}

export default Editor;
