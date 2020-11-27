import './App.css';
import Prewiew from './components/bannerPreview/Preview';
import Form from './components/form/Form';

function App() {
  return (
    <Form>
      {props => <Prewiew {...props} />}
    </Form>  
  );
}

export default App;
