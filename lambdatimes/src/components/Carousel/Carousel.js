import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      curImg: 0,
    }
  }
  componentDidMount(){
    this.setState({ images: carouselData })
  }

  leftClick = () => {
    if (this.state.curImg === 0) {
      this.setState({
        curImg: this.state.images.length - 1,
      })
    }
    else {
      this.setState(prevState => ({
        curImg: prevState.curImg - 1
      }))
    }
  }

  rightClick = () => {
  if (this.state.curImg === this.state.images.length - 1) {
    this.setState({
      curImg: 0,
    })
  }
  else {
    this.setState(prevState => ({
      curImg: prevState.curImg + 1,
    }))
  }
}

  selectedImage = () => {
    return <img src={this.state.images[this.state.curImg]} style={{display: 'block'}} alt="" />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
          {this.selectedImage ()};
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}