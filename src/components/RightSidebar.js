import { Fragment } from 'react'
import classNames from 'classnames'
import { useNavigate, useSearchParams } from 'react-router-dom'

const listingItems = {
  Relevance: [
    {
      name: 'Trending',
      filter: 'trending',
    },
    {
      name: 'Price: Low to High',
      filter: 'price-low-to-high',
    },
    {
      name: 'Price: High to Low',
      filter: 'price-high-to-low',
    },
  ],
}

const RightSidebar = ({}) => {
  const navigate = useNavigate()
  const [query] = useSearchParams()
  return (
    <div className="flex w-full flex-col pl-5">
      {Object.keys(listingItems).map((item, index) => (
        <Fragment key={item}>
          <h2 className={classNames({ 'mt-10': index > 0 }, 'text-white', 'text-lg', 'font-medium')}>{item}</h2>
          {listingItems[item].map((subItem) => (
            <a
              key={subItem.name}
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                if (typeof window !== undefined) {
                  navigate(`${window.location.pathname}?filter=${subItem.filter}`)
                }
              }}
            >
              <h3
                className={classNames(
                  'text-md mt-2',
                  { 'font-light text-[#FFFFFF75]': query.get('filter') !== subItem.filter },
                  { 'font-medium text-[#FFFFFF]': query.get('filter') === subItem.filter }
                )}
              >
                {subItem.name}
              </h3>
            </a>
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default RightSidebar
