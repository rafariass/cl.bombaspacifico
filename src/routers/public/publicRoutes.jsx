import { lazy } from 'react'

import PublicLayout from '../../components/layout/public/PublicLayout'

const AboutUs = lazy(() => import('../../pages/public/AboutUs'))
const Home = lazy(() => import('../../pages/public/Home'))
const NotFound = lazy(() => import('../../pages/public/NotFound'))
const Products = lazy(() => import('../../pages/public/Products'))
const Services = lazy(() => import('../../pages/public/Services'))
const SolarEnergy = lazy(() => import('../../pages/public/SolarEnergy'))

export const publicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      { path: '/', Component: Home },
      { path: '/productos', Component: Products },
      { path: '/servicios', Component: Services },
      { path: '/energia-solar', Component: SolarEnergy },
      { path: '/conocenos', Component: AboutUs },
      { path: '*', Component: NotFound }
    ]
  }
]
