import React from 'react'

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tabActiveIndex: 0
    }
  }

  handleClick(index){
    this.setState({
      tabActiveIndex: index
    });
  }

  render(){

    const children = this.props.children;
    const tabActiveIndex = this.state.tabActiveIndex;
    return(
      <div>
        <div className="menu">
          <ul>
            {children.map((child, index)=>{
              return (<li className={`indicator ${tabActiveIndex === index ? 'activeLi' : ''}`}
              key={index}
              onClick={()=>{this.handleClick(index)}}
              >{child.props.title}
              </li>);
            })}
          </ul>
        </div>
        <div className="content">
          <ul>
            {children[tabActiveIndex].props.children}
          </ul>
        </div>
      </div>
    );
  }
}

export default Tabs;