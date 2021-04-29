export default class UserInfo {
  constructor(firstName, lastName) {
    this._firstName = document.querySelector(firstName);
    this._lastName = document.querySelector(lastName);

}
getUserInfo() {
  this._userInfo = {};
  this._userInfo.firstName = this._firstName.textContent;
  this._userInfo.lastName = this._lastName.textContent;
  return this._userInfo;
}
setUserInfo(firstName, lastName) {
  this._firstName.textContent = firstName;
  this._lastName.textContent = lastName;
}
}
