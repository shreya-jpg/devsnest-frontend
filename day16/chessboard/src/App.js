import './App.css';

export default function App() {
  const checkers = [];
  for (let i = 0; i < 8; ++i) {
    checkers.push(<div className={`squre`} />);
  }
  return (
    <div className="App">
      <div className="chess-board">
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
      </div>
    </div>
  );
}

