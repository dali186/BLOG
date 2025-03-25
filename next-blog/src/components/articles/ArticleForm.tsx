import CKTextEditorWrapper from "../editor/CKTextEditorWrapper";

const ArticleForm = () => {

    return(
        <div className="w-50">
            <div className="relative z-0 mb-6 w-full group">
            <input type="text" name="articleTitle" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                    appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="제목" required />
            </div>
            <div>
                <CKTextEditorWrapper />
            </div>
        </div>
    );
}

export default ArticleForm;