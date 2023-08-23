import React, {Component} from "react";

class TOC extends Component {
    render() {
        console.log('TOC render')
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while (i < data.length) {
            lists.push(
                // <a> 의 e.target은 해당 태그를 가리킴
                // "data-" 를 접두사로 가지는 데이터는 뒤의 값을 dataset 에 값으로 들고있음
                <li key={data[i].id}>
                    <a
                        href={"/content/" + data[i].id}
                        data-id={data[i].id}
                        onClick={function(id, e) {
                            e.preventDefault();
                            this.props.onChangePage(id);
                            // bind() 에 인자로 넣어주어 값을 넘겨주는 방식도 있음
                            // bind(this) 이후에 들어가는 인자는 function 파라미터의 앞으로 들어옴, e는 가장 마지막
                        }.bind(this, data[i].id)}
                    >{data[i].title}</a>
                </li>
            )
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;