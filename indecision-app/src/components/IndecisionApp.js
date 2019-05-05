import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'
// stateless functional component

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({
            selectedOption: option
        }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return alert('Enter valid value to add item')
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exits'
        }

        this.setState((prevState) => ({ 
            options: prevState.options.concat([option]) 
        }))
    }
    componentDidMount() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        if (options) {
            this.setState(() => ({ options }))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        try {

        } catch (e) {
            if (prevState.options.length !== this.state.options.length) {
                const json = JSON.stringify(this.state.options)
                localStorage.setItem('options', json)
            } 
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} 
                    />
                   <div className="widget">
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                   </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
                
            </div>
        );
    }
}

export { IndecisionApp as default }