import NotificationSound from "../../assets/Sounds/notification.mp3";
import bidSuccess from "../../assets/Sounds/Well-Done-Bell.mp3";
import signUpHover from "../../assets/Sounds/Game-Joystick.wav";
import signUpSuccessfull from "../../assets/Sounds/Signup-Success.wav";

const notificationAudio = new Audio(NotificationSound);
export const handleNotificationAudio = () => {
  notificationAudio.play();
};

const bidSuccessAudio = new Audio(bidSuccess);
export const handleBidSuccess = () => {
  bidSuccessAudio.play();
};

const signUpAudio = new Audio(signUpHover);
export const handleSignUpAudio = () => {
  signUpAudio.play();
};
const signUpSuccessfullAudio = new Audio(signUpSuccessfull);
export const handlesignUpSuccessfullAudio = () => {
  signUpSuccessfullAudio.play();
};
