import React, { Component } from "react";
import './style.css';
class NewsCard extends Component {

  render() {
    return (
      <div className={'ParentBox'}>
        <div className={'imageParent'}>
          <img className={'image'} src={this.props.data.urlToImage} alt='new' />
        </div>
        <div className={'titleBox'}>
          <p className={'title'}>{this.props.data.title}</p>
        </div>
        <div className={'descriptionBox'}>
          <p className={'description'}>{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}
export default NewsCard;