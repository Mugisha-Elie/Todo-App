function Header({toggleSlider}){
    return(
        <header className="bg-white border-b border-gray-200 h-16 flex items-center gap-4 px-6">
            <div className="flex items-center gap-3">
                <button 
                onClick={toggleSlider}
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

            </div>

            <div className="text-sm text-gray-400">
                <h2 className="text-xl font-semibold text-gray-800">All Tasks</h2>
                <label htmlFor="">0 tasks</label>
            </div>
        </header>
    )
}

export default Header;