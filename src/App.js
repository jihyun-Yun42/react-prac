import React, { useState } from "react";
import "./App.css";
import DeleteBtn from "./component/DeleteBtn";

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 32, name: "송강" },
    { id: 3, age: 45, name: "김유정" },
    { id: 4, age: 23, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState('');

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const ageChange = (event) => {
    setAge(event.target.value);
  };

  const clickBtn = () => {
    const obj = {
      id: users.length +1,
      age,
      name,
    }
    setUsers([...users, obj])
  }

  const clickDeleteBtn = (itemId) => {
    setUsers(users.filter(user => user.id !== itemId))
  }

  return (
    <div>
      <div style={{
        // display: "flex",
        // flexDirection : "column",
        // alignItems: "center",
        // justifyContent: "center"
        paddingTop: "100px",
        paddingLeft: "100px",
      }}>
        이름 : &nbsp;<input type="text" value={name} onChange={nameChange} /> <br />
        나이 : &nbsp;<input type="text" value={age} onChange={ageChange} /> <br />
        <Button clickBtn={clickBtn} />
      </div>

      <div className="app-style">
        {users.map((i) => {
          return <div key={i.id} className="component-style">
            {i.age} - {i.name} 
            <DeleteBtn item={i} clickDeleteBtn={clickDeleteBtn} />
          </div>
        })}
      </div>
    </div>
  );
}


const Button = ({clickBtn}) => {
  return <button onClick={clickBtn}>추가</button>
}

export default App;
