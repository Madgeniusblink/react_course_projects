const appName = <h1>Visibility Toggle</h1>
let visibility = false

const toggleVisibility = () => {
    visibility = !visibility
    render()
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            {appName}
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, appRoot);
}

render()