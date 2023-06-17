export default function DokterNavbar() {
    return (
      <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-4 mb-4 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
          <nav>
              <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                  <li className="leading-normal text-sm">
                      <a href="javascript;" className="opacity-50 text-slate-700">Home</a>
                  </li>
                  <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">Dashboard</li>
              </ol>
              <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
          </nav>
      </nav>
    )
  }
  