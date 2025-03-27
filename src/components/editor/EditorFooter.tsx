const Footer = ({ onSave }: { onSave: () => void }) => {

    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-100 text-white p-4 flex justify-end gap-4">
            <button className="inline-flex items-center gap-2 rounded-full border border-[#000000] px-6 py-2 text-sm font-semibold text-[#000000] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-dot">
                임시저장
            </button>
            <button 
            onClick={onSave}
            className="inline-flex items-center gap-2 rounded-full border border-[#000000] px-6 py-2 text-sm font-semibold text-[#000000] transition-all hover:bg-[#000000] hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-dot"
            >
                저장
            </button>
        </footer>
    )
}

export default Footer;