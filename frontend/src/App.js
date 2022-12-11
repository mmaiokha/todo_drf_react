import './App.css'
import TodoListContainer from './components/TodoList/TodoListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginContainer from './components/Auth/Login/LoginContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import ProfileInfo from './components/Profile/ProfileInfo/ProfileInfo'
import EditProfile from './components/Profile/EditProfile/EditProfile'
import TaskLists from './components/TodoList/TaskLists/TaskLists'
import Tasks from './components/TodoList/Tasks/Tasks'

function App() {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <HeaderContainer />
                <div className='appWrapperContent'>
                    <Routes>
                        <Route path='*' element={<TodoListContainer />} >
                            <Route path='' element={<Tasks />}/>
                            <Route path='list' element={<TaskLists />}/>
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
