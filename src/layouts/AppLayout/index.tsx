import { matchRoutes, Outlet, useLocation } from 'react-router'
import './index.scss'
import { routes, type Route } from '../../main';

const HeaderAction = () => {
  const location = useLocation();
  const matchedRoutes = matchRoutes(routes, location)
  const { title } = matchedRoutes?.[matchRoutes.length - 1].route as Route;

  return (
    <>
      {location.pathname == '/' && <img src={'/images/logo-white.png'} />}
      {location.pathname !== '/' && (
        <div className='go-back'>
          <img src="/images/back-icon.svg" alt="Previous page" />
          <span>
            {title}
          </span>
        </div>
      )}
    </>
  )
}

const AppLayout = () => {
  return (
    <main className='app-layout'>
      <div className='content'>
        <header>
          <HeaderAction />
        </header>
        <Outlet />
      </div>
    </main>
  )
}

export default AppLayout