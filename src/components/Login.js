import { useState } from "react"
import Input from "./form/Input"
import { useNavigate, useOutletContext } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {setJwtToken} = useOutletContext()
  const {setAlertClassName} = useOutletContext()
  const {setAlertMessage} = useOutletContext()

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if ((email === "admin@example.com") && (password === "password")) {
      setJwtToken("abc")
      setAlertClassName("d-none")
      setAlertMessage("")
      navigate("/")
    } else {
      setAlertClassName("alert-danger")
      setAlertMessage("無効な認証情報です。")
    }
  }

  return (
  <div className="col-md-6 offset-md-3">
    <h2>ログイン</h2>
    <hr/>
    <form onSubmit={handleSubmit}>
      <Input
        title="メールアドレス"
        type="email"
        className="form-control"
        name="email"
        autoComplete="email-new"
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        title="パスワード"
        type="password"
        className="form-control"
        name="password"
        autoComplete="password-new"
        onChange={(event) => setPassword(event.target.value)}
      />
      <hr/>
      <input
        type="submit"
        className="btn btn-primary"
        value="Login"
      />
    </form>
  </div>
  )
}

export default Login