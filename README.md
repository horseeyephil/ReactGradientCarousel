# React Gradient Carousel 
This package is for a custom React component button, that plays an attractive gradient shimmer animation upon hover. 

The button takes an onClick prop as well as props for custom styling.

##### Props (all optional)
``` 
onClick : A callback to triggered on the button's click event
colorTheme: A color if provided to determine the button's border and main gradient theme. Note: 8-digit hex values may be provided to specify the color's alpha (opacity)   value. Named color or rgba value string can also be used.
gradientCenter: The color to contrast in the center of the gradient
customStyling: An style object to provide for custom CSS attributes for the button. If not provided, a default setting will be used. Note: a borderColor property may be    specified in order to overwrite the colorTheme prop and provide a border that is different than the gradient theme
```

```javascript
    <GradientCarouselButton
        onClick = {_=>{console.log('This is a click handler!')}} 
        colorTheme = 'paleturquoise' //this is a named color
        gradientCenter = '#567bcd9e' //8 digit hex with alpha
        customStyling = {
            position: 'absolute',
            borderRadius: 20,
            borderStyle: 'dotted'
        }

    >Here is a custom button with all its props!
    </GradientCarouselButton>
```