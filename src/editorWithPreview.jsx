
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import './editorContainer.css'; 

const EditorWithPreview = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
  };

  return (
    
    <div className="editor-container">
        <h2>Practiquemos Html</h2>
      <Editor
        apiKey='uk0gkw29ah0k90ocl4sn2oi37siyjj8muixh915m4q5n7i68'
        init={{
          plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
        }}
        onEditorChange={handleEditorChange}
        initialValue="Bienvenido a tu Curso de Java con la fundación Adecco, practiquemos html ;)!"
      />

      {/* React Live Preview */}
      <div className="live-container">
      <LiveProvider code={editorContent} scope={{ React }}>
        <div className="live-preview">
          <LivePreview />
        </div>
        <div className="live-editor">
          <LiveEditor />
        </div>
        <div className="live-error">
          <LiveError />
        </div>
      </LiveProvider>
    </div>
      </div>
  );
};

export default EditorWithPreview;
