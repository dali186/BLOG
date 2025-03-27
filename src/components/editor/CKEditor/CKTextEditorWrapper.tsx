import dynamic from "next/dynamic"

const CKTextEditorWrapper = dynamic( () => import('@/components/editor/CKEditor/CKTextEditor'), { ssr: false });

export default CKTextEditorWrapper;