### Main Theme :bomb:
[The Timer](https://github.com/marija-marinkovic-m/React-Challenge---Part-1/blob/master/src/components/Countdown/Timer.js) and, of course [the App](https://github.com/marija-marinkovic-m/React-Challenge---Part-1/blob/master/src/App.js) are the only both **stateful** and **container** components around here.
The App is in charge of interaction with a user, so the user can choose between various options in this jazzy [Settings](https://github.com/marija-marinkovic-m/React-Challenge---Part-1/blob/master/src/App.js#L80-L116 "Settings") panel. But __Timer__ is the real hero :sparkles:. It takes the date/time reference and this hefty [`diff`](https://github.com/marija-marinkovic-m/React-Challenge---Part-1/blob/master/src/util/timeDiff.js "The Diff") utility, then it does the calculation. After that, it passes this to other stateless components to take care of the display. Then it goes along repeating this over and over again, while ticking like an unexploded bomb ([tick-tack-tick-tack](https://github.com/marija-marinkovic-m/React-Challenge---Part-1/blob/master/src/components/Countdown/Timer.js#L38-L48 "interval")).

### Internationalization
To address I18n properly, I've built these small [utilities](https://github.com/marija-marinkovic-m/React-Challenge---Part-1/blob/master/src/util/i18n/index.js "utils") to leverage [React Context API](https://reactjs.org/docs/context.html "react context"). It turns out that React Context can be used as a great tool for managing “stuff” at a global level of our application. Things like — if we have modals opened or not, multi-language support, identity management or switching a theme for our site, are perfect fits for the React Context. In these types of situations, it does not make sense to go through all the trouble of setting up full state management libs like Redux or Mobx.

### Music break
<a href="http://www.youtube.com/watch?feature=player_embedded&v=9jK-NcRmVcw" target="_blank"><img src="http://img.youtube.com/vi/9jK-NcRmVcw/0.jpg" alt="Europe!!!" width="240" height="180" border="10" /></a>

### Reusability and extensibility
Months and years are also available and ready to show up on user's input. Also, dates in past are handled with grace :bowtie:.

### Other libraries
As you can see, I avoid using additional modules/libraries, if I don't have to. 
Besides almighty [`styled-components`](https://www.styled-components.com), I've also used this lovely [`react-datetime-picker`](https://www.npmjs.com/package/react-datetime-picker) library to make my life easier,... in terms of datetime-picking.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
