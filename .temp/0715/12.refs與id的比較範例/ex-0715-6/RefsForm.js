import { useRef } from 'react';

function RefsForm() {
    const inputRef = useRef(null);
    const tryRef = useRef({ a: 10, b: 20 });

    return (
        <>
            <h1>RefsForm</h1>
            <input type="text" ref={inputRef} />
            <button
                onClick={() => {
                    inputRef.current.focus();
                }}
            >
                Focus
            </button>
            <button
                onClick={() => {
                    inputRef.current.blur();
                }}
            >
                Blur
            </button>
            <button
                onClick={() => {
                    alert(tryRef.current.a);
                }}
            >
                Show value
            </button>
        </>
    );
}

export default RefsForm;
