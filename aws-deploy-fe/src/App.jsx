import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [input, setInput] = useState({
    name: '',
    email: '',
  });  
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList();
    return () => {}
  }, []);

  async function getUserList() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/all`);
    if(response.status === 200) {
      const jsonData = await response.json();
      setUserList(jsonData);
    }
  }

  const inputHandler = function(e) {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    });
  };

  const submitHandler = async function(e) {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/user/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      }
    );

    if(response.status === 200) {
      const jsonData = await response.json();
      console.log(jsonData);
      alert('정상 처리되었습니다.');
    }
  };

  return (
    <>
      <div className="form">
        <input type="text" name="name" placeholder="name" onChange={inputHandler} />
        <input type="text" name="email" placeholder="email" onChange={inputHandler} />
        <input type="submit" name="submit" value="submit" onClick={submitHandler} />
      </div>
      <table>
        <caption>
          AWS Tutorial User List 
        </caption>
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {
            userList && userList.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.name}</th>
                  <td>{item.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;