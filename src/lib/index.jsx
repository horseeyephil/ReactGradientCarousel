import React from 'react'

const defaultStyle = {
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 6,
  backgroundColor: 'whitesmoke',
  textAlign: 'center',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '12px',
  fontFamily: 'Helvetica, sans-serif',
  cursor: 'pointer'
}

export default class Glow extends React.Component{
    constructor(props){
        super(props)
        
        this.handleHover=this.handleHover.bind(this)
        this.handleLeave=this.handleLeave.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    shiny(){
      const gradientCenter = this.props.gradientCenter || '#ffffffbb'
      const colorTheme = this.props.colorTheme || '#e66465bb'

      this.button.style.backgroundImage = `linear-gradient(to left, ${colorTheme},  ${gradientCenter} 50%, ${colorTheme})`
      this.on.play()
    }

    handleHover(){
       this.shiny()
    }

    handleLeave(){
        this.on.cancel()
        this.button.style.backgroundImage = null
    }

    handleClick(evt){
        if(this.props.clickMode) this.shiny()
        if(this.props.handleClick) this.props.handleClick(evt)
    }

    componentDidMount(){
        this.width = Math.floor(this.button.getBoundingClientRect().width * 0.99)
        this.button.style.backgroundSize = `${this.width*2.5}px 99%`

        this.keyF = [
            {color: 'whitesmoke', backgroundPosition: '0px 0%', easing: 'linear' },
            {color: 'whitesmoke', backgroundPosition: `-${this.width*2.5}px 0%`, easing: 'linear'},
        ]

        this.on = this.button.animate(this.keyF, {duration:this.width + 2000, iterations: this.props.clickMode || Infinity })
        this.on.cancel() 
        this.on.onfinish = _=>{
          this.button.style.backgroundImage = null
        }
    }

    render(){
        return (
            <div className={this.props.className} style={this.props.className ? {borderColor: this.props.colorTheme || '#e66465bb', ...this.props.customStyling} : { ...defaultStyle, borderColor: this.props.colorTheme || '#e66465bb', ...this.props.customStyling, }} ref={button=>this.button=button}
                onMouseEnter={!this.props.clickMode ? this.handleHover : undefined} onMouseLeave={!this.props.clickMode ? this.handleLeave : undefined}
                onClick = {this.handleClick}
            >
                {this.props.children}
            </div>
        )
    }
}