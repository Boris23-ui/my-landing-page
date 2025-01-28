import MaxWidthWrapper from "./MaxWidthWrapper"


function Navbar () {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 
                    bg-white/75 backdrop-blur-sm transition-all" 
    >
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between">
        
          </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar