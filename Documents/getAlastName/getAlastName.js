function getLastName(fullName) {
  let endOfFirstName = fullName.indexOf(" "); // the char position of the space in the lastName
  let lastName = fullName.substring(endOfFirstName + 1); // start substring at the position past the space
  return lastName; 
} 