import React, {Component} from 'react';
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'read',
            subject: {title: 'WEBBBBB', sub: 'Sub title!!!!!'},
            welcome: {title:'Welcome', desc:'Hello React!!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ]
        }
    }

    // props나 state가 바뀌면 가지고있는 컴포넌트에서 render 함수가 다시 호출됨
    // render 함수가 다시 호출되면서 하위 컴포넌트도 전부 render가 다시 호출
    // 즉, 자기 자신과 자식의 컴포넌트가 다시 그려짐
    render() {
        console.log('App render');
        let _title, _desc = null;

        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode ==='read') {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}>
                </Subject>
                <TOC data={this.state.contents}></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
