import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [jwtToken, setJwtToken] = useState("")
  const [alertMessage, setAlertMessage] = useState("")
  const [alertClassName, setAlertClassName] = useState("d-none")

  const navigate = useNavigate()

  const logout = () => {
    setJwtToken("")
    navigate("/login")
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='mt-3'>さあ、映画を観よう！</h1>
        </div>
        <div className='col text-end'>
          {jwtToken === ""
          ? <a href="/login"><span className='badge bg-success'>ログイン</span></a>
          : <a href="/logout" onClick={logout}><span className="badge bg-danger">ログアウト</span></a>
          }
          </div>
        <hr className='mb-3'></hr>
      </div>

      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <div className='list-group'>
              {/* <a href="/" className='list-group-item list-group-item-action'>ホーム</a> */}
              {/* 上のコメントアウトは以下のようにも書ける */}
              <Link to="/" className='list-group-item list-group-item-action'>ホーム</Link>
              <a href="/movies" className='list-group-item list-group-item-action'>映画</a>
              <a href="/genres" className='list-group-item list-group-item-action'>ジャンル</a>
              {jwtToken !== "" &&
                <>
                  <a href="/admin/movie/0" className='list-group-item list-group-item-action'>映画を追加</a>
                  <a href="/manage-catalogue" className='list-group-item list-group-item-action'>カタログを管理</a>
                  <a href="/graphql" className='list-group-item list-group-item-action'>GraphQL</a>
                </>
              }
            </div>
          </nav>
        </div>
        <div className='col-md-10'>
          <Alert
            message={alertMessage}
            className={alertClassName}
          />
          {/* 選択されたコンポーネントを表示 */}
          <Outlet context={{
            jwtToken, setJwtToken, setAlertClassName, setAlertMessage
          }}/>
        </div>
      </div>
    </div>
  );
}

export default App;
