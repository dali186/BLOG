interface EditorTagsProps {
    tags: string[]
}

const EditorTag = ({ tags }: EditorTagsProps) => {

    return (
        <input 
        type="text" 
        name="tag"
        defaultValue={tags}
        placeholder="태그는 ,로 구분합니다."
        className="block py-2.5 px-0 w-full text-sm text-gray-900 font-bold bg-transparent border-0 border-b-2 border-t-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-dot"
        />
    );
}

export default EditorTag;