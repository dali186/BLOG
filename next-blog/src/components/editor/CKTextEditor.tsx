'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor, Autosave, BlockQuote, Code, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Highlight, ImageEditing, ImageUtils, Indent, IndentBlock,
  Link, RemoveFormat, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, WordCount
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

function CKTextEditor() {
  return (
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
          'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'code', 'removeFormat', '|',
          'link', 'insertTable', 'highlight', 'blockQuote', '|',
          'outdent', 'indent'
        ],
        placeholder: '생각을 정리하고 공유해보세요...'
      }}
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
          writer.setStyle(
            'height', '200px', editor.editing.view.document.getRoot()
          )
        })
      }}
    />
  );
}

export default CKTextEditor;