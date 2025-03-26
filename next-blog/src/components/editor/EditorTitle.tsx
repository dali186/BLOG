const EditorTitle = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {

    return (
        <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="제목을 작성해주세요"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required />
    );
}

export default EditorTitle;