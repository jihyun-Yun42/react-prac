import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 1, age: 30, name: "송강" },
    { id: 1, age: 30, name: "김유정" },
    { id: 1, age: 30, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState('');

  const nameChange = (event) => {
    setName(event.target.value);
    setName('')
  };

  const ageChange = (event) => {
    setAge(event.target.value);
  };

  const clickBtn = (event) => {
    const obj = {
      id: users.length +1,
      age,
      name,
    }
    setUsers([...users, obj])
  }
  return (
    <div>
      <div>
        이름 : &nbsp;<input type="text" value={name} onChange={nameChange} /> <br />
        나이 : &nbsp;<input type="text" value={age} onChange={ageChange} />
        <button onClick={clickBtn}>추가</button>
      </div>

      <div className="app-style">
        {users.map((i) => (
          <div key={i.id} className="component-style">
            {i.age} - {i.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
