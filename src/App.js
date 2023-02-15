import './CssStyle/App.css';
import './CssStyle/Browser.css';
import './CssStyle/Mobile.css';
import { BrowserView, MobileView } from 'react-device-detect';
import Button from './Component/Button';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  }
  return (
    <div className='App'>
      <BrowserView className='Browser'>
        데스크탑
        <Button label="Click me" onClick={ handleClick } />
      </BrowserView>
      <MobileView className='Mobile'>
        모바일
      </MobileView>
    </div>
  );
}

export default App;
