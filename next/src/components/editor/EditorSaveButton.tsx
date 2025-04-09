const EditorSaveButton = () => {
    return (
        <button
        className="inline-flex items-center gap-2 rounded-full border border-[#000000] px-6 py-2 text-sm font-semibold text-[#000000] transition-all hover:bg-[#000000] hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-dot"
        >
        저장
        </button>
    )
}

export default EditorSaveButton;