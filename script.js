//access overlay elements
const getInTouchOverlayAsideElement = document.getElementById("get-in-touch-overlay")
const subscribeOverlayAsideElement = document.getElementById("subscribe-overlay")
const basicPlanOverlayAsideElement = document.getElementById("plan-basic-overlay")
const standardPlanOverlayAsideElement = document.getElementById("plan-standard-overlay")
const premiumPlanOverlayAsideElement = document.getElementById("plan-premium-overlay")

//access backdrop element
const backdropElement = document.getElementById("backdrop-element")

//access form control
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

function openGetInTouch() {
  getInTouchOverlayAsideElement.style.display = "block"
  backdropElement.style.display = "block"
}

function closeGetInTouch() {
  getInTouchOverlayAsideElement.style.display = "none"
  backdropElement.style.display = "none"
}

function openSubscribe() {
  subscribeOverlayAsideElement.style.display = "block"
  backdropElement.style.display = "block"
}

function closeSubscribe() {
  subscribeOverlayAsideElement.style.display = "none"
  backdropElement.style.display = "none"
}

function openPlanBasicOverlay() {
  basicPlanOverlayAsideElement.style.display = "block"
  backdropElement.style.display = "block"
}

function closePlanBasicOverlay() {
  basicPlanOverlayAsideElement.style.display = "none"
  backdropElement.style.display = "none"
}

function openPlanStandardOverlay() {
  standardPlanOverlayAsideElement.style.display = "block"
  backdropElement.style.display = "block"
}

function closePlanStandardOverlay() {
  standardPlanOverlayAsideElement.style.display = "none"
  backdropElement.style.display = "none"
}

function openPlanPremiumOverlay() {
  premiumPlanOverlayAsideElement.style.display = "block"
  backdropElement.style.display = "block"
}

function closePlanPremiumOverlay() {
  premiumPlanOverlayAsideElement.style.display = "none"
  backdropElement.style.display = "none"
}
