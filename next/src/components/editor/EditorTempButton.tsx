'use client';

const EditorTempButton = () => {
    const handleTempSave = async(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const form = document.getElementById('articleForm') as HTMLFormElement;
        const formData = new FormData(form);

        const response = await fetch('/api/articles/temp', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
    }

    return (
        <button
            onClick={handleTempSave}
            className="inline-flex items-center gap-2 rounded-full border border-[#000000] px-6 py-2 text-sm font-semibold text-[#000000] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-dot"
        >
            임시저장
        </button>
    )
}

export default EditorTempButton;