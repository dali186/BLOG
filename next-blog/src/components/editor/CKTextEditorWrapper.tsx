'use client'

import dynamic from "next/dynamic"

const CKTextEditorWrapper = dynamic( () => import('@/components/editor/CKTextEditor'), { ssr: false });

export default CKTextEditorWrapper;