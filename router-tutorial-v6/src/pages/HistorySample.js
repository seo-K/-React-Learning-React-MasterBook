import React, { Component } from "react";

class HistorySample extends Component {
    // 뒤로가기
    handleGoBack = () => {
        this.props.navigate.goBack();
    };
    //홈으로 이동
    handleGoHome = () => {
        this.props.navigate.push("/");
    };

    componentDidMount() {
        //이것을 설정하고 나면 페이지에 변화가 생기려고할때마다 정말 나갈 것 인지 질문함
        this.unblock = this.props.navigate.block("정말 떠나실 건가요?");
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트되면 질문을 멈춤
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;
