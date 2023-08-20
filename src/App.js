import Accordion from "./components/Accordion";
import {UseRefExample, UseMemoExample, UseCallbackExample, UseReducerExample} from "./hooks"

const App = () => {
  return (
    <div className="container">
      <div className="text-center mt-2">
        <h2>یادگیری و استفاده از هوک های ری اکت</h2>
      </div>
      <hr className="text-danger" />
      <Accordion title="مثال آموزشی هوک useRef" heading="headingOne">
        <UseRefExample />
      </Accordion>
      <hr className="text-primary" />
      <Accordion title="مثال آموزشی هوک useMemo" heading="headingTwo">
        <UseMemoExample />
      </Accordion>
      <hr className="text-success" />
      <Accordion title="مثال آموزشی هوک useCallback" heading="headingThree">
        <UseCallbackExample />
      </Accordion>
      <hr className="text-success" />
      <Accordion title="مثال آموزشی هوک useReducer" heading="headingFour">
        <UseReducerExample />
      </Accordion>
      <hr className="text-dark" />
    </div>
  );
};

export default App;
