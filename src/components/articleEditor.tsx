import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./articleEditor.css";
import axios from 'axios';
import { History } from "history";

const serverHost = process.env.REACT_APP_SERVER_HOST

type Props = {
  history: History
}
type State = {

}

export default class ArticleEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: "",
      summary: "",
      content: "",
      link: "",
    }
  }

  handleLinkChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      link: e.target.value
    })
  }

  handleEditorChanged(value: String) {
    this.setState({
      content: value
    })
  }

  handleTitleChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      title: e.target.value
    })
  }

  handleSummaryChanged(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      summary: e.target.value
    })
  }

  handleDeploy() {
    const article = this.state;
    axios.post(`${serverHost}/article`, {
      article
    }).then(() => {
      this.props.history.push('/');
    })
  }

  render() {
    return <div className="wrap">
      <div className="handleBox">
        <input className="title" placeholder="title" onChange={(e) => { this.handleTitleChanged(e) }} />
        <button onClick={() => this.handleDeploy()}>发布</button>
      </div>
      <input className="link" placeholder="link" onChange={(e) => { this.handleLinkChanged(e) }} />
      <textarea className="summary" placeholder="summary" onChange={(e) => { this.handleSummaryChanged(e) }} />
      <SimpleMDE className="editor"
        onChange={(value) => this.handleEditorChanged(value)}
        options={{
          spellChecker: false
        }}
      />
    </div>;
  }
}
