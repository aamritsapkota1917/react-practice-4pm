
import './App.css';
import MyRoutes from './MyRoutes';
// legeacy creatstore --> compiler  chinauna that any reducer is a store 
// import {legacy_createStore} from 'redux';
// reeducer bata component ma data pass garna lai--> provider use hunxa
import { Provider } from 'react-redux';

// import cartReducer from './REDUX/reducers/cartReducer';
import store from './store';

// import First from './First';
// import { Test,Show } from './Test';
//function ko vitra ha bala lekna milne jsx tag 
const App=() => {
  // const store=legacy_createStore(cartReducer)
  
  return (
//     <div className="App">
//       <h2>Amrit Sapkota</h2>

//       <hr/>
      
  
// <First/>
// <Test/>
// <Show/>
//     </div>
<>

<Provider store={store} >

<MyRoutes/>
</Provider>
</>
  );
}

 

export default App;
