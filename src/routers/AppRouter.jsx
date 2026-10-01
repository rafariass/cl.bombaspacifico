import { createBrowserRouter, RouterProvider } from 'react-router'
import { publicRoutes } from './public/publicRoutes'

const AppRouter = () => {
  const router = createBrowserRouter([...publicRoutes])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
