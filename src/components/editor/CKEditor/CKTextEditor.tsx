import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor, Autosave, BlockQuote, Code, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Highlight, ImageEditing, ImageUtils, Indent, IndentBlock,
  Link, RemoveFormat, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, WordCount
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

function CKTextEditor({ onChange }: { onChange: (value: string) => void }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
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
    />
  );
}

export default CKTextEditor;