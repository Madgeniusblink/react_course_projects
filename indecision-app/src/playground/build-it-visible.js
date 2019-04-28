class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle On React</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (<p>Hey. These are some details you can now see!</p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))







// const appName = <h1>Visibility Toggle</h1>
// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }


// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             {appName}
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// render()