import './App.css';
import UseRefExample from './hooks/UseRefExample';


const App = () => {
  return (
    <div className='container'>
      <div className='text-center mt-2'>
        <h2>پروژه یادگیری هوک های ری اکت</h2>
      </div>
      <hr className='text-danger'/>
      <UseRefExample />
    </div>
  );
}

export default App;
