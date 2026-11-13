

function MenuIc({ isOpen, setIsOpen }) {

    return(
        <button
        onClick={() => setIsOpen(!isOpen)}
        >
            <svg 
            className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-transform duration-300 ease-in-out cursor-pointer" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            >
            {isOpen ? (
                /* Bentuk Silang (X) saat terbuka */
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M6 18L18 6M6 6l12 12" 
                />
                ) : (
                /* Bentuk Garis Tiga (Menu) saat tertutup */
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4 6h16M4 12h16M4 18h16" 
                />
            )}
            </svg>
        </button>
    )
}

export {
    MenuIc
}