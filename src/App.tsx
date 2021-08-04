import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import './App.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import {Row, Col, Typography} from "antd"


function App() {
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
    </div>
  );
}

export default App;
