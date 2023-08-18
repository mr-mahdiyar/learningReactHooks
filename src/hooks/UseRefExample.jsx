import { useRef, useEffect, useState } from "react";

const UseRefExample = () => {
        const [name, setName] = useState('');
        const inputRef = useRef(null);
        const prevState = useRef('');
        const renderTimes = useRef(1);


        useEffect( () => {
                renderTimes.current = (renderTimes.current + 1)
        }, [name])

        useEffect(() => {
                // console.log(inputRef);
                inputRef.current.focus();
        }, []);

        useEffect(() => {
                prevState.current = name;
        }, [name])

        const focusOnInput = () => {
                inputRef.current.focus();
        }
        return (
                <>
                        <div className="w-50 d-grid gap-2 mx-auto ">
                                <h5 className="alert alert-success text-center">
                                        آشنایی با هوک useRef
                                </h5>
                                <p>{`نام شما: ${name}`}</p>
                                <p>{`نام قبلی شما: ${prevState.current}`}</p>
                                <p>{`تعداد رندرهای این کامپوننت: ${renderTimes.current}`}</p>
                                <input type="text" className="form-control" placeholder ="اسم بده عزیزم..." ref={inputRef} value={name} onChange={e => {setName(e.target.value)}}/>
                                <button type="button" className="btn btn-primary btn-block mt-2" onClick = {focusOnInput}>
                                        خوووب تمرکز کن
                                </button>
                        </div>
                </>
        );
};

export default UseRefExample;