import './App.css';
import A from './components/A';
import B from './components/B';
import EventBind from './components/EventBind';
import KeysList from './components/FunctionalComponents/KeysList';
import UseRef from './components/FunctionalComponents/UseRef';
import UseState from './components/FunctionalComponents/UseState';
import Names from './components/Names';
import NamesHelper from './components/NamesHelper';
import SubscribeState from './components/SubscribeState';

function App() {
  const arr = [1,2,34,0,32,3];
  return (
    <div className="App">
      {/* <NamesHelper/>
      <SubscribeState/>
      <EventBind uni="CU"/> */}
      {/* <UseState/> */}
      <UseRef/>
      <A/>
      {/* <B/> */}
      {/* <KeysList arr = {arr}/> */}
    </div>
  );
}

export default App;