import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { pageRouteList } from '../hooks/paths'

const PageRoutes = () => {
    return (
        <Routes>{pageRouteList.map(item => <Route key={item.id} path={item.path} element={item.element} ></Route>)}</Routes>
    )
}

export default PageRoutes