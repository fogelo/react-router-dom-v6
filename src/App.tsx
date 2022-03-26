import React, {useEffect} from 'react';
import './App.css';
import {NavLink, Route, Routes, Outlet, useParams, useNavigate, Navigate} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h2>1</h2>
            {/*<Lesson1/>*/}
            <hr/>
            <h2>2</h2>
            {/*<Lesson2/>*/}
            <hr/>
            <h2>3</h2>
            {/*<Lesson3/>*/}
            <hr/>
            <h2>4</h2>
            {/*<Lesson4/>*/}
            <hr/>
            <h2>4</h2>
            <Lesson5/>
        </div>
    );
}

export default App;

function Lesson1() {
    return (
        <div>
            <NavLink to={'/'}>main </NavLink>
            <NavLink to={'/login'}>login </NavLink>
            <NavLink to={'/profile'}>profile </NavLink>
            <NavLink to={'/profile/settings'}>settings </NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div>profile</div>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    )
}

function Lesson2() {
    return (
        <div>
            {/*демонстрация вложенности №1*/}
            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/*'} element={(
                    <div>
                        profile
                        <Routes>
                            <Route path={'/settings'} element={<div>settings</div>}/>
                        </Routes>
                    </div>)}/>
            </Routes>


            <hr/>
            {/*демонстрация вложенности №2*/}
            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={(
                    <div>
                        profile
                        {/*на место outlet вставляется вложенный route когда в адресной строке этого появляется путь этого роута*/}
                        <Outlet/>
                    </div>
                )}>
                    <Route path={'/profile/settings'} element={<div>settings</div>}/>
                    {/*<Route path={'settings'} element={<div>settings</div>}/> можно сократить путь*/}

                    <Route path={'*'} element={<div>404</div>}/>
                    {/*когда указан id чтобы попасть на зведочку нужно больше чем колличество параметров параметр*/}
                    <Route path={':id'} element={<div>id</div>}/>
                    {/*<Route path={':id:id'} element={<div>id</div>}/>*/}

                    <Route index element={<div>отрисовывается когда нет параметров и путей</div>}/>
                </Route>
            </Routes>
        </div>
    )
}

function Lesson3() {
    return (
        <div>
            <NavLink to={'/'}>main </NavLink>
            <NavLink to={'/login'}>login </NavLink>
            <NavLink to={'/profile'}>profile </NavLink>
            <NavLink to={'/profile/1'}>profile/1 </NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/:x/:y'} element={<Profile3/>}/>
            </Routes>
        </div>
    )
}

function Profile3() {
    const params = useParams<'x' | 'y'>()
    const some = params
    console.log(some)
    return (
        <div>
            profile
        </div>
    )
}


function Lesson4() {
    return (
        <div>
            <NavLink to={'/'}>main </NavLink>
            {/*<NavLink to={'/login'} className={'def'}>login </NavLink>*/}
            <NavLink to={'/login'} className={(params) => params.isActive ? 'act' : 'def'}>login </NavLink>

            {/*<NavLink to={'/profile'} style={{color: 'lime'}}>profile </NavLink>*/}
            <NavLink to={'/profile'} style={(params) => {
                return {color: params.isActive ? 'lime' : 'black'}
            }}>profile </NavLink>
            <NavLink to={'/profile/settings'}>settings </NavLink>
        </div>
    )
}

function Lesson5() {
    return (
        <div>
            <NavLink to={'/'}>main </NavLink>
            <NavLink to={'/login'}>login </NavLink>
            <NavLink to={'/profile'}>profile </NavLink>
            <NavLink to={'/profile/settings'}>settings </NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<Profile5/>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    )
}

function Profile5() {
    const navigate = useNavigate()

    //редирект на логин если не залогинен вариант 2
    // useEffect(() => {
    //     if (true) navigate('/login')
    // }, [])

    return (
        <div>
            {/*//редирект на логин если не залогинен вариант 2*/}
            {/*{true && <Navigate to={'/login'}/>}*/}

            profile
            <button onClick={() => {
                navigate('/login')
            }}>logout</button>
        </div>
    )
}