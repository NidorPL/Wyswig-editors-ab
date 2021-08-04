import React, {useState} from 'react';
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

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: '<p>Hello World! 🌎️</p>',
    })

    return (
        <EditorContent editor={editor} />
    )
}

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
    </div>
  );
}

export default App;
