import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import './App.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import {Row, Col, Typography, Input} from "antd"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Editor as TinyEditor } from '@tinymce/tinymce-react';
import SunEditor from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File



function App() {
    const [value, setValue] = useState('');
    const [tinyValue, setTinyValue] = useState('');



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
              Non deterministically saves the rich text and also adds weird stuff to it. Not really reliable

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
                Very nice, but is unmaintained for 18 months. Without updates it will break with React 18
                <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules}
                            formats={formats}/>


            </Col>
        </Row>
        <Row>
            <Col span={15}>
                <Typography.Title level={3} >Tiny Editor</Typography.Title>
                Need to check if we want to buy the licence.

                Looks good in general

                <TinyEditor
                             initialValue="<p>This is the initial content of the editor.</p>"
                             onEditorChange={(data) => {
                                 console.log("stuff changed")
                                 console.log(data);
                                 setTinyValue(data)
                             }}
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

                <Typography.Title level={5} >Tiny Output format:</Typography.Title>
                <Input.TextArea rows={6} value={tinyValue}/>




            </Col>
        </Row>
        <Row>
            <Col span={15}>
                <Typography.Title level={3} >Sun Editor</Typography.Title>
                It basically works, but the documentation is in http and it looks like from the 90s
                <SunEditor />

            </Col>
        </Row>
        <Row>
            <Col span={15}>
                <Typography.Title level={3} >X Editor</Typography.Title>


            </Col>
        </Row>
    </div>
  );
}

export default App;
