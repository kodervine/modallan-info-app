Modallan documentation
***

This is one of the major projects I've built since I started learning React Hooks - props and useState

So I decided to try something mini.

After initializing the react-app, I created the different folders i needed in the source file

I created a components file, and added the Header.js file, and Main.js

The Main.js is actually the bulk of the work

I also created another folder directly in the source file, countryData.js

I know I should have used webAPIs to dynamically source the data from online. However, I'm still learning webAPIs, so that's sorta on hold for now

So I manually created out the information for the 54 countries (more of copy and paste though)

Then, in the App.js, I imported all the necessary components I needed (Main.js, Header.js, countryData.js)

I selected the countrydata.js and saved it to the allCountryData variable.

In the variable, I mapped over the countryData array and assigned the object keys to different props in the Main.js

Then in the App.js return div, I rendered both the Header, and the {allCountryData} variable to be able to display on the page 
***
In the Main.js file, I created a state to toggle the countryDetails. I named the state - [ hideDetails, setHideDetails], and assigned it to "none"

I also created the styling variable, which I set the display to a ternary operator. So, if the hideDetails is "none", it will set the display to "none" else "block"

Then, I created the toggle Function.
Then I set the setHideDetails useState, which will return the opposite of the current hideDetails when it's called

Now, over to the return div, I created the markup for the page, and used props to display all the elements

In the header, I added the toggle Function for the onClick eventListener. So, when it's called, it's going to set the opposite of whatever the current "hideDetails" useState is. I also added this event listener to the "expand icon" as well

Finally, in the countryDetails section, I set the styles to the style variable which already has that ternary operator.
What this does is that it will set the details display to "none/block" depending on what the current hideDetails useState is.

And that's how I built my current mini-encyclopedia (Modallan )
