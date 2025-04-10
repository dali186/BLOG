import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor, Undo, Autosave, BlockQuote, Code, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Highlight, Indent, IndentBlock,
  Link, RemoveFormat, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, WordCount, FileRepository,
  Image, ImageEditing, ImageUpload, ImageUploadUI, ImageUploadProgress, Clipboard
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { useEffect, useRef, useState } from 'react';
import { EditorImageUploadAdapterPlugin } from './imgAdapter/UploadAdapter';

function CKTextEditor({ content }: { content?: string }) {
  const [editorContent, setEditorContent] = useState(content || '');
  const editorRef = useRef<any>(null);

  // content prop이 변경될 때 에디터 내용 업데이트
  useEffect(() => {
    if (content !== undefined && content !== editorContent) {
      setEditorContent(content);
      
      // 에디터 인스턴스가 있으면 내용 직접 업데이트
      if (editorRef.current) {
        editorRef.current.setData(content);
      }
    }
  }, [content]);

  const handleEditorChange = (_event: any, editor: any) => {
    const newContent = editor.getData();
    setEditorContent(newContent);
    
    // 숨겨진 textarea 업데이트
    const contentTextarea = document.getElementById('content') as HTMLTextAreaElement;
    if (contentTextarea) {
      contentTextarea.value = newContent;
    }
  }

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={editorContent}
        config={{
          licenseKey: 'GPL',
          plugins: [
            Autosave, Undo, BlockQuote, Code, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Highlight, Indent, IndentBlock,
            Link, RemoveFormat, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, WordCount,
            FileRepository, Image, ImageEditing, ImageUpload, ImageUploadUI, ImageUploadProgress, Clipboard
          ],
          extraPlugins: [EditorImageUploadAdapterPlugin],
          toolbar: [
            'undo', 'redo', '|',
            'fontSize', 'fontColor', 'fontBackgroundColor', 'highlight', 'imageUpload', '|',
            'insertTable', 'code', 'link', 'blockQuote', '|',
            'outdent', 'indent', '|',
            'strikethrough', 'subscript', 'superscript', 'code', 'removeFormat', '|',
          ],
          placeholder: '생각을 정리하고 공유해보세요...'
        }}
        onReady={(editor) => {
          // 에디터 인스턴스 저장
          editorRef.current = editor;
          
          // dark / light 감지
          const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

          editor.editing.view.change((writer) => {
            const rootElement = editor.editing.view.document.getRoot();
            if (rootElement) {
              writer.setStyle('border', 'none', rootElement);
              writer.setStyle('min-height', '75vh', rootElement);
              if (isDarkMode) { writer.setStyle('background-color', 'black', rootElement); writer.setStyle('color', '#f3f4f6', rootElement); } 
            }
          })

          const toolBarElement = editor.ui.view.element;
          if (toolBarElement) {
            const stickyPanelElement = toolBarElement.querySelector('.ck-sticky-panel__content') as HTMLElement | null;
            if (stickyPanelElement) {
              stickyPanelElement.style.border = 'none';
            }
          }
        }}
        onChange={handleEditorChange}
      />
      <textarea id='content' name='content' className='hidden' defaultValue={editorContent}/>
    </>
  );
}

export default CKTextEditor;