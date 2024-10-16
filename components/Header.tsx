export function Header() {
    return (
        <header className="bg-white py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 relative">
                <img className="w-full rounded-lg" src="image/logo.png" alt="logo"/>
            </div>
            <div className="flex-1 border-t-2 border-b-2 border-[#72393A] mx-6">
              <div className="flex items-center justify-between py-4 px-6">
                <nav className="flex items-center space-x-6">
                  <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="/about">
                    ABOUT
                  </a>
                  <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="/service">
                    SERVICE
                  </a>
                  <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="/blog">
                    BLOG
                  </a>
                  <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="/gallery">
                    GALLERY
                  </a>
                </nav>
                <button className="bg-[#F8920D] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e08100] transition-colors">
                  CONTACTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}