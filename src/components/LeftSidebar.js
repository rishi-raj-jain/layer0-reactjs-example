import { Fragment } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'

const listingItems = {
  'All Categories': [
    {
      name: 'Joggers',
      route: '/commerce/joggers',
    },
    {
      name: 'Jackets',
      route: '/commerce/jackets',
    },
    {
      name: 'T-Shirts',
      route: '/commerce/t-shirts',
    },
    {
      name: 'Shop All',
      route: '/commerce/shop-all',
    },
  ],
}

const LeftSidebar = () => {
  const location = useLocation()

  return (
    <div className="flex w-full flex-col">
      {Object.keys(listingItems).map((item, index) => (
        <Fragment key={item}>
          <h2 className={classNames({ 'mt-10': index > 0 }, 'text-white', 'text-lg', 'font-medium')}>{item}</h2>
          {listingItems[item].map((subItem) => (
            <Link key={subItem.name} to={subItem.route}>
              <h3
                className={classNames(
                  'text-md mt-2',
                  { 'font-light text-[#FFFFFF75]': location.pathname !== subItem.route },
                  { 'font-medium text-[#FFFFFF]': location.pathname === subItem.route }
                )}
              >
                {subItem.name}
              </h3>
            </Link>
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default LeftSidebar
