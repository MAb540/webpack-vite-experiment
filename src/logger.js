import _ from "lodash";

export default function printMe(arg) {
  console.log("I get called from print.js!: ", arg);
  console.log("this should be printed is updated");
  console.log(_.join("abc", "def"));
}

export function printYou() {
  console.log("this is from print You");
}
