import EditorTempButton from "./EditorTempButton";
import EditorSaveButton from "./EditorSaveButton";
import EditorCategorySelect from "./EditorCategorySelect";

interface EditorCategoryProps {
    category?: string;
}
const EditorFooter = async({ category }: EditorCategoryProps) => {

    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-300 text-white p-4 flex justify-between items-center">
            <div>
                <EditorCategorySelect selectedCategory={category} />
            </div>
            <div className="flex gap-4">
                <EditorTempButton />
                <EditorSaveButton />
            </div>
        </footer>
            )
}

export default EditorFooter;