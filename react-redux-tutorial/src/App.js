import './App.css';
import styled from 'styled-components';

import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

function App() {
    return (
        <ContentWrap>
            <div className="inner-wrap">
                {/* <Counter number={0} /> */}
                <CounterContainer/>
                <hr />
                <Todos />
            </div>
        </ContentWrap>
    );
}

export default App;

const ContentWrap = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

    & .inner-wrap {
        width: 400px;
    }
`;
