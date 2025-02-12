`use strict`;
/**The profile object describes a user's profile on the gaming platform.
 *  Its properties store the username and the number
 * of active hours of playTime spent in the game. */
const profile = {
  username: 'Jacob',
  playTime: 300,
  /*The changeUsername(newName) method changes the username value 
  to the passed newName.*/
  changeUsername(newName) {
    this.username = newName;
  },
  //The updatePlayTime(hours) method adds hours to playTime.
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  /*The getInfo() method returns a string with the 
  current username and playTime values.*/
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
//Leave this code for review by your mentor.
