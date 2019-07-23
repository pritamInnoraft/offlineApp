import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchNews } from './actions'
import NewsCard from '../../Components/NewsCard'
class Homepage extends Component {

  constructor(props){
    super(props)
    this.state = {
      disconnected : false
    }
  }

  componentDidMount(){
    this.props.fetchNews()
    window.addEventListener('online', this.handleConnectionChange);
    window.addEventListener('offline', this.handleConnectionChange);
  }

  componentWillUnmount(){
    window.removeEventListener('online', this.handleConnectionChange);
    window.removeEventListener('offline', this.handleConnectionChange);
  }

  handleConnectionChange = () => {
    const condition = navigator.onLine ? true : false;
    this.setState({
      disconnected : !condition
    })
  }

  render() {
    if(!this.state.disconnected){
      if(this.props.news){
        return(
          <div className={'container'}>
            {this.props.news.map((data,key)=>(
              <NewsCard data={data} key={key}/>
            ))}
          </div>
        )
      }
    }
    else{
      return(
        <div className={'loader'}>
          <img className={'loaderImage'} src={require('../../media/loading.svg')} alt='loading' />
          <p>No Internet Connection...</p>
        </div>
      )
    }
    

    return (
      <div className={'loader'}>
        <img className={'loaderImage'} src={require('../../media/loading.svg')} alt='loading' />
        <p>Loading News...</p>
      </div>
    );

  }
} 

const mapStateToProps = (state) => {
  return {
      news: state.defaultReducer.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews : () => {
      dispatch(fetchNews())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);