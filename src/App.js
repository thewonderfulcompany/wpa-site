import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Cards/>
    </div>
  );
}


function Header(props){
  return (
    <header>
      <img id='wpalogo' src='./wpalogo.svg'/>
      <div>
        <button>sign out</button>
      </div>
    </header>
  )
}


// this should be replaced with an api call for real data once that is ready
// this data structure forces unique names for cards and links, may change in the future
const dummyData = {
  'Card 1': {
    'Link 1': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
    'Link 4': 'https://example.com',
  },

  'Card 2': {
    'Link 1': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
    'Link 4': 'https://example.com',
  },

  'Card 3': {
    'Some Example Link that is Super Long': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
    'Link 4': 'https://example.com',
  },

  'Card 4': {
    'Link 1': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
    'Link 4': 'https://example.com',
    'Link 5': 'https://example.com',
    'Link 6': 'https://example.com',
  },

  'Card 5': {
    'Some Example Link that is Super Long': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
    'Link 4': 'https://example.com',
  },

  'Card 6': {
    'Link 1': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
  },

  'Card 7': {
    'Some Example Link that is Super Long': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
    'Link 4': 'https://example.com',
  },

  'Card 8': {
    'Link 1': 'https://example.com',
    'Link 2': 'https://example.com',
  },

  'Card 8': {
    'Some Example Link that is Super Long': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
    'Link 4': 'https://example.com',
  },

  'Card 10': {
    'Link 1': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
  },

  'Card 11': {
    'Some Example Link': 'https://example.com',
    'Link 2': 'https://example.com',
    'Link 3': 'https://example.com',
    'Link 4': 'https://example.com',
  },
}


function Cards(props){
  console.log(Object.keys(dummyData))
  return (
    <div className='cards'>
      {
        Object.keys(dummyData)
          .map(card => <Card title={card} links={dummyData[card]}/>)
      }
    </div>
  )
}


function Card(props){
  const {title, links} = props

  return (
    <div className='card'>
      <p>{title}</p>
      {
        Object.keys(links)
          .map(link => <a href={links[link]}>{link}</a>)
      }
    </div>
  )
}


export default App;
