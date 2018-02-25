import red from 'material-ui/colors/red';
import pink from 'material-ui/colors/pink';
import purple from 'material-ui/colors/purple';
import indigo from 'material-ui/colors/indigo';
import blue from 'material-ui/colors/blue';
import cyan from 'material-ui/colors/cyan';
import green from 'material-ui/colors/green';
import lime from 'material-ui/colors/lime';
import amber from 'material-ui/colors/amber';
import orange from 'material-ui/colors/orange';
import grey from 'material-ui/colors/grey';
import teal from 'material-ui/colors/teal';
import brown from 'material-ui/colors/brown';

const colors = [red, pink, orange,  purple, indigo, blue, cyan, green, lime, amber, grey, teal, brown]

export default function colorFrom(string) {
  try {
    const index = string.toString().split('')
      .map(char => char.charCodeAt())
      .reduce((sum, next) => sum + next);
   
    const colorIndex = index % colors.length;
    return colors[colorIndex][500];
  } catch (e) {
    console.log(e)
    return colors[blue][500];
  }
}
