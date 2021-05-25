export default class UserInfo {
  constructor(firstName, lastName, avatar) {
    this._firstName = document.querySelector(firstName);
    this._lastName = document.querySelector(lastName);
    this._avatar = document.querySelector(avatar);

}

setUserInfo(firstName, lastName, avatar) {
  this._firstName.textContent = firstName;
  this._lastName.textContent = lastName;
  this._avatar.src = avatar;
}
addUserInfo(firstName, lastName) {
  this._firstName.textContent = firstName;
  this._lastName.textContent = lastName;
}
getUserInfo(item) {
  this._userInfo = {};
  this._userInfo.firstName = this._firstName.textContent;
  this._userInfo.lastName = this._lastName.textContent;
  this._avatar.src = item;
  return this._userInfo;
}
}
