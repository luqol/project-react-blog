const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2024-02-22'),
      author: 'John Doe',
      category: 'News',
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2024-12-24'),
      author: 'Jan Karosha',
      category: 'Movies',
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2024-06-30'),
      author: 'Timoty Pumpkin',
      category: 'News',
    },
    {
      id: '4',
      title: 'Article title IV',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2024-09-11'),
      author: 'Timoty Pumpkin',
      category: 'News',
    },
    {
      id: '5',
      title: 'Article title V',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2024-03-03'),
      author: 'Timoty Pumpkin',
      category: 'Sport',
    },
  ],
  categories: [
    {
      id: '1',
      category: 'Sport',
     },
     {
      id: '2',
      category: 'News',
     },
     {
      id: '3',
      category: 'Movies',
     },
  ],
};

export default initialState;