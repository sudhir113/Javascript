// when you use the   const location = window.location;

// But while this app will work, 
// it has one major issue; it will reload the entire page every time a user clicks a link.



The HTML5 History API makes it possible to update the browser’s URL without causing a page reload


You could do this by adding an onClick handler to each individual <a> element,
 but since most links within an app will share the same logic,
  React applications will often use a component to handle links. 
  Instances of this component behave exactly like <a> elements, 
  except that instead of refreshing the page,
   they will update the URL in-place using browserHistory.push():


   This Link object assumes the browserHistory object is imported from the file defined earlier.