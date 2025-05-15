import EditorTitle from "../editor/EditorTitle";
import CKTextEditorWrapper from "../editor/CKEditor/CKTextEditorWrapper";
import EditorFooter from "../editor/EditorFooter";
import { addArticleAction, editArticleAction } from "@/server-actions/article";
import EditorDescription from "../editor/EditorDescription";
import EditorTag from "../editor/EditorTag";
import { Article } from "@/types/types";

interface articleFormProps {
    article?: Article;
}

const ArticleForm = (articleFormProps?: articleFormProps) => {
    const mode = articleFormProps?.article ? 'edit' : 'create';
    const action = mode === 'create' ? addArticleAction : editArticleAction;

    return(
        <form action={action} id="articleForm" name="articleForm" className="p-6 pt-1">
            <div className="relative z-0 mb-6 w-full group">
                <EditorTitle title={articleFormProps?.article?.slug} />
                <EditorDescription description={articleFormProps?.article?.description} />
            </div>
            <div>
                <CKTextEditorWrapper content={articleFormProps?.article?.content} />
            </div>
            <div className="mb-16 pt-3">
                <EditorTag tags={articleFormProps?.article?.tags ?? []} />
            </div>
            <div>
                <EditorFooter category={articleFormProps?.article?.category} />
            </div>
        </form>
    );
}

export default ArticleForm;