import React from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    // usePromise 사용
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=5f8000afab5d4032ad8d772ca13370d5`,
        );
    }, [category]);

    // 로딩중일때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    }

    // 아직 reasponse 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }

    // 로딩중일때
    if (error) {
        return <NewsListBlock>오류발생 !</NewsListBlock>;
    }

    // response 값이 유효할때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
