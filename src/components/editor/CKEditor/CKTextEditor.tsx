import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor, Undo, Autosave, BlockQuote, Code, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Highlight, Indent, IndentBlock,
  Link, RemoveFormat, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, WordCount, FileRepository,
  Image, ImageEditing, ImageUpload, ImageUploadUI, ImageUploadProgress, Clipboard
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { useState } from 'react';
import { EditorImageUploadAdapterPlugin } from './imgAdapter/UploadAdapter';

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
          editor.editing.view.change((writer) => {
            const rootElement = editor.editing.view.document.getRoot();
            if (rootElement) {
              writer.setStyle('min-height', '75vh', rootElement);
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