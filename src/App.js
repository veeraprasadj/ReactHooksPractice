import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import NoJsx from "./components/NoJsx";
import PropertiesComponent from "./components/Properties";
import StatesInClass from "./components/StatesInClass";
import Counter from "./components/Counter";
import DestructurePropsStates from "./components/DestructurePropsStates";
import EventBinding from "./components/EventBinding";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import ConditionalRendering from "./components/ConditionalRendering";
import StyleComponent from "./components/StyleComponent";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentsDemo from "./components/FragmentsDemo";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/Refs/RefsDemo";
import ForwardRefParent from "./components/Refs/ForwardRefParent";
import UserContextProvider from "./components/Context/UserContextProvider";
import HttpGetComp from "./components/HttpMethods/HttpGetComp";
import HttpPostForm from "./components/HttpMethods/HttpPostForm";
import UseStateHook from "./components/ReactHooks/UseStateHook";
import CounterOne from "./components/ReactHooks/UseReducer/CounterOne";
import UseReducerContextParent from "./components/ReactHooks/UseReducerContext/UseReducerContextParent";
import UseEffectRS from "./components/ReactHooks/UseReducerContext/UseEffectReducerState/UseEffectRS";
import UseMemoComp from "./components/ReactHooks/UseMemo/UseMemoComp";
import UseRefComp from "./components/ReactHooks/UseRef/UseRefComp";
import Home from "./components/Routing/Home";
import About from "./components/Routing/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
    // <div className="App">

    //   {/* <UseRefComp />
    //   <UseMemoComp />
    //   <UseEffectRS />
    //   <UseReducerContextParent /> */}
    //   {/* <CounterOne /> */}
    //   {/* <UseStateHook /> */}
    //   {/* <HttpGetComp ></HttpGetComp> */}
    //   {/* <HttpPostForm /> */}
    //   {/* <UserContextProvider /> */}
    //   {/* <ForwardRefParent />
    //   <RefsDemo />
    //   {/* <ParentComp /> */}
    //   {/* <FragmentsDemo />
    //   <LifeCycleA />
    //   <Form />
    //   <StyleComponent/>
    //   <ConditionalRendering />
    //   <MethodsAsPropsParent/>
    //   <EventBinding />
    //   <Greet />
    //   <Welcome />
    //   <NoJsx />
    //   <PropertiesComponent firstName='Prasad' lastName='Jadapalli'>
    //    <button>Action</button>
    //    <p>This is example for properties and children usage in React applications</p>
    //   </PropertiesComponent>
    //   <StatesInClass />
    //   <Counter />
    //   <DestructurePropsStates fname='Prasad' lname='Jadapalli'/> */}
    // </div>
  );
}

export default App;
