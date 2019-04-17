import React, { Component } from 'react';
import './Page.css';
import Intro from '../Intro/Intro';
import Sidebar from '../Sidebar/Sidebar';
import Article from '../Article/Article';
import Footer from '../Footer/Footer';

class Page extends Component {

  state = {
      articles: [
          { id: 1, title: 'First Title', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' },
          { id: 2, title: 'Second Title', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' },
          { id: 3, title: 'Third Title', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' },
          { id: 4, title: 'Fourth Title', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' }
      ]
  }

  render() {

    let articleList = null;

    articleList = (
      <div className="content">
        {this.state.articles.map((article) => {
            return <Article
              pavadinimas={article.title}
              tekstas={article.text}
              key={article.id}
            />
          }
        )}
      </div>
    );

    return (
      <div className="page">
          <Intro />
          <Sidebar />
          {articleList}
          <Footer />
      </div>
    )
  }
}


export default Page;