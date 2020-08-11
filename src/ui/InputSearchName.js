import React, { useState } from "react";

const InputSearchName = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Search pokemon name"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default InputSearchName;
