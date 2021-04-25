import axios from "axios";
import React, { useEffect, useState } from "react";

const API = "https://6050aa4a5346090017670332.mockapi.io/user";

const User = (props) => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");

  const getUser = async () => {
    try {
      const resp = await axios.get(API);
      setUsers(resp.data);
    } catch (error) {
      console.log(error);
      setErr(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log('user', users)
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên TK</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, index) => (
              <tr key={index.toString()}>
                <th scope="row">{index + 1}</th>
                <td>{item.user_name}</td>
                <td>{item.fuul_name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <table></table>
    </div>
  );
};

export default User;