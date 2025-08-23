import {useState} from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TodoApp from "./components/TodoApp.jsx";
import Login from "./components/Login.jsx"

function App() {
    const [user, setUser] = useState(null)
    return (
        <div>
            <Header user={user} setUser={setUser}/>
            <Login user={user} setUser={setUser}/>
            {user === null ? null :
                <TodoApp user={user} setUser={setUser}/>}
        </div>
    );
}

export default App;
