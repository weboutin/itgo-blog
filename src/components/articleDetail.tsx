import React from 'react';
import axios from 'axios';
import './articleDetail.css'
import { RouteComponentProps } from "react-router-dom";
import {Article} from '../types/Article'
import ReactMarkdown from 'react-markdown';


const serverHost = process.env.REACT_APP_SERVER_HOST

type Props = {
  articleId: string
} & RouteComponentProps<{ articleId: string }>

type State = {
  article: Article
}

export default class ArticleDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      article: {
        title: "",
        summary: "",
        link: "",
        content: "",
      }
    }
  }

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    axios.get(`${serverHost}/article/${articleId}`).then((response) => {
      const article = response.data;
      this.setState({
        article
      })
    })
  }

  render() {
    return <div className="detail-wrap">
      <div className="detail-mdWrap">
        <ReactMarkdown source={this.state.article.content} />
      </div>
    </div>;
  }
}
