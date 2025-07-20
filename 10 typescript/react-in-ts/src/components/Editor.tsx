import { useState } from "react";

interface Props {
  onAddClick: (content: string) => void;
}

function Editor(props: Props) {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onButtonClick = () => {
    props.onAddClick(text);
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
