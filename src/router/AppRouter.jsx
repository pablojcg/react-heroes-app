import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoute } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
  return (
    <>
      <Routes>

      <Route path='public/*' element={
          <PublicRoute>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Navigate to={"/public/login"} />} />
            </Routes>
          </PublicRoute>
        } />

        {/* Para cuando solo hay una ruta publica */}
        {/* <Route path='login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } /> */}

        {/* <Route path="login" element={<LoginPage />} /> */}

        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoute />
          </PrivateRoute>
        } />

        {/* <Route path='/*' element={<HeroesRoute />} /> */}

      </Routes>
    </>
  )
}
