import './App.css';
import Header from "./mycomponents/Header";
import ToDoS from "./mycomponents/ToDoS";
import Footer from "./mycomponents/Footer"; 
// import ToDoItems from './mycomponents/ToDoItems';

function App() {

    const onDelete = (todo)=> {
        console.log("i am onDelete of todo", todo)
    }

    let todo = [
        {
            sno: 1,
            title: "Go to the Market",
            desc: " You need to go to the market to get the Job done1",
        },
        {
            sno: 2,
            title: "Go to the Mall",
            desc: " You need to go to the Mall to get the Job done2",
        },
        {
            sno: 3,
            title: "Go to the School",
            desc: " You need to go to the School to get the Job done3",
        }, 
    ]
    return (
       <>
        <Header title = "Todo List" searchBar = {false}/>
        <ToDoS todo={todo} onDelete={onDelete} />
        <Footer/>
        </>
    );
}

export default App;