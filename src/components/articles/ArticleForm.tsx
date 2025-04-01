import EditorTitle from "../editor/EditorTitle";
import CKTextEditorWrapper from "../editor/CKEditor/CKTextEditorWrapper";
import Footer from "../editor/EditorFooter";
import { addArticleAction } from "@/app/actions/article";
import EditorDescription from "../editor/EditorDescription";

const ArticleForm = () => {

    return(
        <form action={addArticleAction} className="p-6 pt-1">
            <div className="relative z-0 mb-6 w-full group">
                <EditorTitle />
                <EditorDescription />
            </div>
            <div>
                <CKTextEditorWrapper />
            </div>
            <Footer />
        </form>
    );
}

export default ArticleForm;