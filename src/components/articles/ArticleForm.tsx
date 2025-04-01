import EditorTitle from "../editor/EditorTitle";
import CKTextEditorWrapper from "../editor/CKEditor/CKTextEditorWrapper";
import EditorFooter from "../editor/EditorFooter";
import { addArticleAction } from "@/app/actions/article";
import EditorDescription from "../editor/EditorDescription";
import EditorTag from "../editor/EditorTag";

const ArticleForm = () => {

    return(
        <form action={addArticleAction} id="articleForm" name="articleForm" className="p-6 pt-1">
            <div className="relative z-0 mb-6 w-full group">
                <EditorTitle />
                <EditorDescription />
            </div>
            <div>
                <CKTextEditorWrapper />
            </div>
            <div className="mb-16 pt-3">
                <EditorTag />
            </div>
            <div>
                <EditorFooter />
            </div>
        </form>
    );
}

export default ArticleForm;