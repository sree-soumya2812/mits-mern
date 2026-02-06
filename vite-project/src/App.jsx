import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Counter from "./component/Counter";
import { Route, Routes } from "react-router-dom";
import UseState from "./Hooks/UseState";
import Login from "./auth/Login";
import Hook from "./Hooks/Hook";
import UseEffect from "./Hooks/UseEffect";
import UseEffectApi from "./Hooks/UseEffectApi";
import Signedup from "./auth/Signedup";
import UseRef from "./Hooks/UseRef";
import UseReducer from "./Hooks/UseReducer";
import UseMemo from "./Hooks/UseMemo";
import UseCallBack from "./Hooks/UseCallBack";
import Todo from "./Component/Todo";
const element = <h1>Hello</h1>;
const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home name="G sree Soumya" />} />
        <Route
          path="/about"
          element={
            <About name="G sree Soumya" age={25} dept="Cyber Security" />
          }
        />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signedup" element={<Signedup />} />
        <Route path="/todo" element={<Todo />} />

        <Route path="/hook" element={<Hook />}>
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useEffectApi" element={<UseEffectApi />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="useCallBack" element={<UseCallBack />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
