function Login(props) {
  const { auth, setAuth } = props

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          setAuth(!auth)
        }}
      >
        {auth ? '我要登出' : '登入'}
      </button>
      <p>{auth ? '會員已登入' : '沒登入'}</p>
    </>
  )
}

export default Login
