import React, { useState } from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data, setData] = useState(null);

  // async 함수사용
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=5f8000afab5d4032ad8d772ca13370d5',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // 5f8000afab5d4032ad8d772ca13370d5

  // axios 사용
  // axios란 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클리어언트.
  // 라이브러리 특징 = Promise 기반으로 처리
  // const onClick = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          // stringify 의 두번재 파라미터와 세번째 파라미터를 위와 같이 null, 2 로 설정해주면 JSON에 들여쓰기가 적용된 상태로 문자열이 만들어짐.
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
