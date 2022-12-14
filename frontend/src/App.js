import './App.css'
import TodoListContainer from './components/TodoList/TodoListsContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginContainer from './components/Auth/Login/LoginContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import ProfileInfo from './components/Profile/ProfileInfo/ProfileInfo'
import EditProfile from './components/Profile/EditProfile/EditProfile'
import TasksContainer from "./components/TodoList/Tasks/TasksContainer";
import TaskListsContainer from "./components/TodoList/TaskLists/TaskListContainer";

function App() {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <HeaderContainer />
                <div className='appWrapperContent'>
                    <Routes>
                        <Route path='todo/*' element={<TodoListContainer />} >
                            <Route path='current' element={<TasksContainer />} />
                            <Route path=':id' element={<TasksContainer />} />
                            <Route path='list' element={<TaskListsContainer />} />
                        </Route>

                        <Route path='/profile/*' element={<ProfileContainer />}>
                            <Route path='' element={<ProfileInfo />} />
                            <Route path='info' element={<ProfileInfo />} />
                            <Route path='edit' element={<EditProfile />} />
                        </Route>
                        <Route path='/login' element={<LoginContainer />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
