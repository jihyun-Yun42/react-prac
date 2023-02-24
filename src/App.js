import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onclickId = (event) => setId(event.target.value);
  const onclickPw = (event) => setPw(event.target.value);
  return (
    <div>
      <div>
        아이디 : <input type="text" value={id} onChange={onclickId} />
      </div>
      <div>
        비밀번호 : <input type="password" value={pw} onChange={onclickPw} />
      </div>
      <button
        onClick={() => {
          alert(`회원님의 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`);
          setId("");
          setPw("");
        }}
      >
        제출!
      </button>
    </div>
  );
}

export default App;
