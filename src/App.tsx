import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import './App.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import {Row, Col, Typography} from "antd"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Editor as TinyEditor } from '@tinymce/tinymce-react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File



function App() {
    const [value, setValue] = useState('');

    const modules = {
            toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image'],
                ['clean']
            ],
        }
    const formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ]

    // For tiny

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        }
    };


    return (
    <div className="App">


      <Row>

          <Col span={15}>
              <Typography.Title level={3} >Old one (react-draft-wysiwyg)</Typography.Title>
              <Editor
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={() => {}}
              />
          </Col>
      </Row>
      <Row>
          <Col span={15}>
              <Typography.Title level={3} >Froala Editor</Typography.Title>
              <FroalaEditorComponent tag='textarea' config={{
                  placeholderText: 'Edit Your Content Here!',
                  charCounterCount: false
              }} />
          </Col>
      </Row>
        <Row>
            <Col span={15}>
                <Typography.Title level={3} >Quill Editor</Typography.Title>
                <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules}
                            formats={formats}/>


            </Col>
        </Row>
        <Row>
            <Col span={15}>
                <Typography.Title level={3} >Tiny Editor</Typography.Title>
                <TinyEditor
                             initialValue="<p>This is the initial content of the editor.</p>"
                             init={{
                                 height: 500,
                                 menubar: false,
                                 plugins: [
                                     'advlist autolink lists link image charmap print preview anchor',
                                     'searchreplace visualblocks code fullscreen',
                                     'insertdatetime media table paste code help wordcount'
                                 ],
                                 toolbar: 'undo redo | formatselect | ' +
                                     'bold italic backcolor | alignleft aligncenter ' +
                                     'alignright alignjustify | bullist numlist outdent indent | ' +
                                     'removeformat | help',
                                 content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                             }}/>


            </Col>
        </Row>
        <Row>
            <Col span={15}>
                <Typography.Title level={3} >Sun Editor</Typography.Title>
                <SunEditor />

            </Col>
        </Row>
    </div>
  );
}

export default App;
