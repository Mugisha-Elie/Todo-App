
function Sidebar({isOpen}){
    return (
        // Sidebar
        <aside className={`h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 overflow-hidden ${isOpen ? 'w-64 p-0' : 'w-0 p-0'}`}>

            {/* Logo Section  */}
            <div className="p-6 flex items-center gap-2">
                {/* Logo */}
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    TF
                </div>
                <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                    TaskFlow
                </h1>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-4 space-y-2">

                <div className="flex items-center justify-between px-4 py-3 bg-blue-50 rounded-xl cursor-pointer">

                    <div className="flex items-center gap-3">
                        <img className="h-5" src="list-todo.svg"  alt="task icon" />
                        <span className="font-medium">All Tasks</span>
                    </div>

                    <span className="bg-blue-200 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                        0
                    </span>

                </div>
            </nav>
        </aside>
    )
}


export default Sidebar;