import React from 'react';
import './App.css';
import {NavLink, Route, Routes, Outlet} from 'react-router-dom';

function App() {
    return (
        <div className="App">
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


            <hr/>
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
    );
}

export default App;
