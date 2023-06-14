
import { Link, useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const { error} = useRouteError()
    return (
      <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          {/* <FaceFrownIcon className='w-40 h-40 text-yellow-500' /> */}
          <img className='w-[380px] h-96' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1683187988~exp=1683188588~hmac=191b6b6e02452387dc4d33dc749eb345de716d57939e6631a91ce84ae69d4e33" alt="" />
          <div className='max-w-md text-center'>
            <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
              {error?.message}
            </p>
            <Link to='/' className='btn'>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    )
  }

export default ErrorElement;