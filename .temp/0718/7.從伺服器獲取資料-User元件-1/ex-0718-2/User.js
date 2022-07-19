import { useState, useEffect } from 'react'
import './User.css'

// 要裝axios套件: `yarn add axios`
import axios from 'axios'

function User() {
  const [users, setUsers] = useState([])

  const getUserData = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    //console.log(response)
    // 設定到state
    setUsers(response.data)
  }

  // didMount
  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <h1>會員資料</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>生日</th>
          </tr>
        </thead>
        <tbody>
          {users.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.birth}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default User
