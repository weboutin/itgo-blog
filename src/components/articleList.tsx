import React from 'react';
import ArticleCard from './articleCard';
import './articleList.css';
import { Article } from '../types/Article'
import axios from 'axios';

const serverHost = process.env.REACT_APP_SERVER_HOST

type Props = {

}

type State = {
  articles: Article[]
}

export default class ArticleList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get(`${serverHost}/articles`).then((response) => {
      const articles = response.data;
      this.setState({
        articles
      })
    })
  }

  render() {
    return <div>
      <div className="articleWrap">
        {this.state.articles.map((article, index) => {
          return <ArticleCard article={article} key={index} />
        })}
      </div>
    </div>;
  }
}
