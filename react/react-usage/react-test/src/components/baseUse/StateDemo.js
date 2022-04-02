import React, { Component } from "react";

class StateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>累加</button>
      </div>
    );
  }

  increment = () => {
    //this.state.count++ //错误
    // this.setState({
    //   count: this.state.count + 1,
    // },()=>{
    //     //对应 vue $nextTick
    //     console.log('count by callback',this.state.count)
    // });
    // console.log('count', this.state.count) //异步 拿不到最新值
    //setTimeout setState 同步
    // setTimeout(() => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log('count in setTimeout',this.state.count)
    // }, 0);


    //传入对象 会被合并 类似于Object.assign
    // this.setState({
    //     count: this.state.count + 1
    // })
    // this.setState({
    //     count: this.state.count + 1
    // })
    // this.setState({
    //     count: this.state.count + 1
    // })
    
    //传入函数 函数无法合并
    this.setState((prevState,props) => { 
        return {
            count: prevState.count + 1
        }
     })

     this.setState((prevState,props) => { 
        return {
            count: prevState.count + 1
        }
     })

     this.setState((prevState,props) => { 
        return {
            count: prevState.count + 1
        }
     })
  };

//   bodyClickHandler = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });

//     console.log("document body count ", this.state.count);
//   };

//   componentDidMount() {
//     //自定义DOM事件,setState是同步的
//     document.body.addEventListener("click",this.bodyClickHandler);
//   }

//   componentWillUnmount() {
//     document.body.removeEventListener("click",this.bodyClickHandler);
//     //clearTimeout 性能 内存泄漏风险
//   }
}

export default StateDemo;
