import Cards from './components/cards';
import Header from './components/header';
import React from 'react';
function App() {
  const [score, setScore] = React.useState(0);
  return (
    <div className="App">
      <Header score={score} />
      <Cards score={score} scoreFunc={setScore} />
    </div>
  );
}

export default App;
