import { useEffect, useState } from 'react'
import { filterProducts } from '../lib/helper'
import { prefetch } from '@layer0/prefetch/window'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import ProductPreview from '../components/ProductPreview'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const Commerce = () => {
  const { name } = useParams()
  const location = useLocation()
  const [query] = useSearchParams()
  const [data, setData] = useState([])

  // Prefetch the API call on PDP as soon as the page mounts
  useEffect(() => {
    fetch(`/l0-api/products/all`)
      .then((res) => res.json())
      .then((res) => {
        let data = res
        if (name === 'jackets') {
          data = data.filter((i) => i.name.toLowerCase().includes('jacket'))
        } else if (name === 't-shirts') {
          data = data.filter((i) => i.name.toLowerCase().includes('t-shirt'))
        } else if (name === 'joggers') {
          data = data.filter((i) => i.name.toLowerCase().includes('jogger'))
        }
        setData(data)
      })
    prefetch('/l0-api/products/all')
  }, [location])

  return (
    <div className="flex-col items-center justify-start">
      <div className="mb-5 flex w-full flex-row items-start px-5">
        <div className="hidden w-[15%] pt-5 md:block">
          <LeftSidebar />
        </div>
        <div className="flex w-full flex-col items-start pt-5 md:w-[70%]">
          <h2 className="text-[#FFFFFF75]">Showing {data.length} Results</h2>
          <div className="mt-5 flex flex-row flex-wrap items-start">
            {filterProducts(data, query.get('filter')).map((i) => (
              <ProductPreview key={i.path} {...i} />
            ))}
          </div>
        </div>
        <div className="hidden w-[15%] pt-5 md:block">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default Commerce
