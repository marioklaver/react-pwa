import { useEffect, useState } from 'react';
import { ArticleCategory, NewsItem } from '@components/molecules';

interface NewsApiResponse {
  newsItems: NewsItem[];
}

export const useNewsApi = (category: ArticleCategory): NewsApiResponse => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?language=en'.concat(
      category !== ArticleCategory.all ? `&category=${category}` : '',
    );
    fetch(url, {
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY ?? '',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setNewsItems(json.articles ?? []);
      })
      .catch((e) => console.log(e));
  }, [category]);

  return { newsItems } as const;
};
