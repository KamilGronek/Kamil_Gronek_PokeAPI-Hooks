import React, { useState } from "react";

const InputSearchHp = ({ getQueryHp }) => {
  const [text, setText] = useState("");

  const onChange = (qH) => {
    setText(qH);
    getQueryHp(qH);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Search pokemon HP"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default InputSearchHp;
