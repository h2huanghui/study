import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.onTitleChange}/>
                <button onClick={this.onSubmitTitle}>提交</button>
            </div>
        )
    }

    onTitleChange = (e) => { 
        this.setState({
            title: e.target.value
        })
     }

     onSubmitTitle = () => {
         const {submitTitle} = this.props;
         submitTitle(this.state.title);
         this.setState({
             title: ''
         })
      }
}

//props 类型检查
Input.propTypes = {
    submitTitle: PropTypes.func.isRequired
}


class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {list} = this.props;
        return <ul>
            {
              list.map(el=><li key={el.id}>{el.title}</li>)
            }
        </ul>
    }
}

//props 类型检查
List.propTypes = {
 list: PropTypes.arrayOf(PropTypes.object).isRequired
}


class TodoListDemo extends Component {
  constructor(props) {
    super(props);
    //状态(数据)提升
    this.state = {
        list: [{
            id:1,
            title: 'aaa'
        },{
            id: 2,
            title: 'bbb'
        },{
            id: 3,
            title: 'ccc'
        }]
      };
  }
  render() {
    return (
     <div>
         <Input submitTitle={this.onSubmitTitle}/>
         <List list={this.state.list} />
     </div>
    );
  }

  onSubmitTitle = (title)=>{
      this.setState({
        list: this.state.list.concat({
            id: `id-${Date.now()}`,
            title
        })
      })
  }
}

export default TodoListDemo;
