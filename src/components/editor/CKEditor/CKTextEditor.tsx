import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor, Autosave, BlockQuote, Code, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Highlight, ImageEditing, ImageUtils, Indent, IndentBlock,
  Link, RemoveFormat, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, WordCount
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { useState } from 'react';

function CKTextEditor() {
  const [editorContent, setEditorContent] = useState();

  const handleEditorChange = (event: any, editor: any) => {
    const content = editor.getData();
    setEditorContent(content);
  }
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          licenseKey: 'GPL',
          plugins: [
            Autosave, BlockQuote, Code, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Highlight, ImageEditing, ImageUtils, Indent, IndentBlock,
            Link, RemoveFormat, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, WordCount
          ],
          toolbar: [
            'heading', '|',
            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', '|',
            'strikethrough', 'subscript', 'superscript', 'code', 'removeFormat', '|',
            'link', 'insertTable', 'highlight', 'blockQuote', '|',
            'outdent', 'indent'
          ],
          placeholder: '생각을 정리하고 공유해보세요...'
        }}
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
            const rootElement = editor.editing.view.document.getRoot();
            if (rootElement) {
              writer.setStyle('min-height', '80vh', rootElement);
            }
          })
        }}
        onChange={handleEditorChange}
      />
      <textarea id='content' name='content' className='hidden' value={editorContent}/>
    </>
  );
}

export default CKTextEditor;