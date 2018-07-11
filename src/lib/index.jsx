import React from 'react'

export default class Glow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }

        this.defaultStyle = {
            borderWidth: 2,
            borderStyle: 'solid',
            borderRadius: 6,
            backgroundColor: 'whitesmoke',
            textAlign: 'center',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '12px',
            fontFamily: 'Helvetica, sans-serif',
        }

        this.handleHover=this.handleHover.bind(this)
        this.handleLeave=this.handleLeave.bind(this)
    }

    handleHover(){

        const gradientCenter = this.props.gradientCenter || '#ffffffbb'
        const colorTheme = this.props.colorTheme || '#e66465bb'

        this.button.style.color = 'whitesmoke'

        this.button.style.backgroundImage = `linear-gradient(to left, ${colorTheme},  ${gradientCenter} 50%, ${colorTheme})`
        this.button.style.backgroundSize = `${this.width*2.5}px 99%`

        if(this.on) this.on.play()
        else this.on = this.button.animate(this.keyF, {duration:this.width + 2000, iterations: Infinity })
    }

    handleLeave(){
        this.on.cancel()
        this.button.style.backgroundImage = null
        this.button.style.color = null
    }

    componentDidMount(){
        this.width = Math.floor(this.button.getBoundingClientRect().width * 0.99)

        this.keyF = [
            {backgroundPosition: '0px 0%', easing: 'linear' },
            {backgroundPosition: `-${this.width*2.5}px 0%`, easing: 'linear'}
        ]
    }

    render(){
        return (
            <div style={{ ...this.defaultStyle, borderColor: this.props.colorTheme || '#e66465bb', ...this.props.customStyling, }} ref={button=>this.button=button}
                onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}
                onClick = {this.props.onClick}
            >
                {this.props.children}
            </div>
        )
    }
}