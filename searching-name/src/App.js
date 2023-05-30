import * as React from 'react';

const title = 'React';

const jsElement = React.createElement('h1', null, `Hello ${title}`);

const Item = (props) => {
  return (
    <li key={props.key}>
      <span>
        <a href={props.item['url']}>{props.item['title']}</a>
      </span>
      <span>{props.item['author']}</span>
      <span>{props.item['num_comments']}</span>
      <span>{props.item['points']}</span>
    </li>
  );
};

const List = (props) => (
  <ul>
    {props.list.map(function (item) {
      return <Item key={item['objectsID']} item={item} />;
    })}
  </ul>
);

const Search = (props) => {
  const handleChange = (event) => {
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor='Search'>Search: </label>
      <input type='text' onChange={handleChange} id='search'></input>
      <p>
        Searching for <strong>{props.searchTerm}</strong>
      </p>
    </div>
  );
};

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    console.log(event.target.value);
    //updates state from search component
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    return story['title'].toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      {jsElement}
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <List list={searchedStories} />
    </div>
  );
};

export default App;
