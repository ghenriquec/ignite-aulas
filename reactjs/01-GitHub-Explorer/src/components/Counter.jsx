export function Counter(){
    const increment = () => {
        console.log('incrementing')
    }
    return(
    <div>
        <h2>0</h2>
        <button type="button" onClick={increment}>
            Increment
        </button>
    </div>
    );
}