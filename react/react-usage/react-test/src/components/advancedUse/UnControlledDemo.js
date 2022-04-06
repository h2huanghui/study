import React, { Component } from 'react';

class UnControlledDemo extends Component {
  constructor(props) {
    super(props);
    //对应vue data
    this.state = {
      name: 'hh',
      flag: true
    };
    this.nameInputRef = React.createRef(); //创建ref
    this.fileInputRef = React.createRef();
  }
  render() {
      //input defaultValue
    //   return <div>
    //       <input defaultValue={this.state.name} ref={this.nameInputRef} />
    //       <span>{this.state.name}</span>
    //       <button onClick={this.alerInputName}>alert name</button>
    //   </div>

      //checkbox defaultChecked
    //   return <input type='checkbox' defaultChecked={this.state.flag} />
    

    //file 
    return <div>
        <input type='file' ref={this.fileInputRef} />
        <button onClick={this.alertFile}>alert file</button>
    </div>

  }

  alerInputName = () => { 
      const elem = this.nameInputRef.current; //通过 ref 获取DOM 节点
      alert(elem.value)
   }

   alertFile = () => { 
       const elem = this.fileInputRef.current;
       alert(elem.files[0].name)
    }
}

export default UnControlledDemo;
