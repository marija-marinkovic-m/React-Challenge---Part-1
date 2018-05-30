### Main Theme :bomb:
[The timer](React-Challenge---Part-1/src/components/Countdown/Timer.js) and, of course [App](React-Challenge---Part-1/src/App.js) are the only **dirty** components around here. 
The App is in charge of interaction with a user, so the user can choose between various options in this jazzy [Settings](https://github.com/marija-marinkovic-m/React-Challenge---Part-1/blob/d01876f4461e723906a1aaca1f4ac3cdfc5a36d0/src/App.js#L80-L116) panel. But __Timer__ is the real hero :sparkles:. It takes the date/time reference and this hefty [`diff`](React-Challenge---Part-1/src/util/timeDiff.js) utility, then it does the calculation. After that, it passes this to other stateless components to take care of the display. And at the same time, it is ticking like an unexploded bomb ([tick-tack-tick-tack](https://github.com/marija-marinkovic-m/React-Challenge---Part-1/blob/d01876f4461e723906a1aaca1f4ac3cdfc5a36d0/src/components/Countdown/Timer.js#L38-L48)).

### Internationalization
To solve I18n issue, I've built these small [utilities](React-Challenge---Part-1/src/util/i18n/index.js) to leverage [React Context API](https://reactjs.org/docs/context.html)

### Music break
<a href="http://www.youtube.com/watch?feature=player_embedded&v=9jK-NcRmVcw" target="_blank"><img src="http://img.youtube.com/vi/9jK-NcRmVcw/0.jpg" alt="Europe!!!" width="240" height="180" border="10" /></a>

### Reusability and extensibility
Months and years are also available and ready to show up on user's input. Also, dates in past are handled with grace, information 'Starts in' becomes 'Expired' ago, in one of three languages :bowtie:.

### Other libraries
As you can see, I avoid using additional modules/libraries, if I don't have to. 
Besides almighty [`styled-components`](https://www.styled-components.com), I've also used this lovely [`react-datetime-picker`](https://www.npmjs.com/package/react-datetime-picker) library to make my life easier,... in terms of datetime-picking.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).