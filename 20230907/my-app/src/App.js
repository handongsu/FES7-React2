import './App.css';
function App() {
  let date = new Date();
  
  return (
    <div>
      <div style={{backgroundColor: "black", color: "white"}}>
        <h1 style={{color: "red" }}>년:{date.getFullYear()}</h1>
      <h2>월/일: {date.getMonth() + 1}/{date.getDate()}</h2>
      <h3>시간: {date.getHours()}시{date.getMinutes()}분{date.getSeconds()}초</h3>
      </div>
      
    </div>
  );
}

export default App;
