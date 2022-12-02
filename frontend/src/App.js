import './App.css';
import TodoListContainer from "./components/TodoList/TodoListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Auth/Login/LoginContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <HeaderContainer />
                <div className="appWrapperContent">
                    <Routes>
                        <Route path='' element={<TodoListContainer />} />
                        <Route path='/login' element={<LoginContainer />} />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
