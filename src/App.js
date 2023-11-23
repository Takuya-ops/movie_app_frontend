import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='mt-3'>さあ、映画を観よう！</h1>
        </div>
        <div className='col text-end'>
          <a href="#!"><span className='badge bg-success'>ログイン</span></a>
        </div>
        <hr className='mb-3'></hr>
      </div>

      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <div className='list-group'>
              <a href="/" className='list-group-item list-group-item-action'>ホーム</a>
              <a href="/movies" className='list-group-item list-group-item-action'>映画</a>
              <a href="/genres" className='list-group-item list-group-item-action'>ジャンル</a>
              <a href="#!" className='list-group-item list-group-item-action'>映画を追加</a>
              <a href="#!" className='list-group-item list-group-item-action'>カタログを管理</a>
              <a href="#!" className='list-group-item list-group-item-action'>GraphQL</a>
            </div>
          </nav>
        </div>
        <div className='col-md-10'>
          {/* 選択されたコンポーネントを表示 */}
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default App;
