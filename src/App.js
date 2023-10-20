import logo from './logo.svg';
import './App.css';
import Header from "./mycomponents/Header";
// import ToDoItems from "./mycomponents/ToDoItems";
import ToDoS from "./mycomponents/ToDoS";
import Footer from "./mycomponents/Footer"; 

function App() {
    return (
       <>
        <Header title="Todos List"/>
        {/* <ToDoItems/> */}
        <ToDoS/>
        <Footer/>
        </>
    );
}

export default App;