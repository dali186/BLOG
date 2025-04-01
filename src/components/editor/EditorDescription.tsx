const EditorDescription = () => {

    return (
        <input 
        type="text" 
        name="description"
        placeholder="아티클을 간략하게 설명해주세요."
        className="block py-2.5 px-0 w-full text-sm text-gray-900 mt-2 italic font-light bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required />
    );
}

export default EditorDescription;