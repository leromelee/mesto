class UserInfo {
    constructor(nameSelector, discSelector) {
        this._profileName = document.querySelector(nameSelector);
        this._profileDisc = document.querySelector(discSelector);
    }

    setUserInfo(item) {
        this._profileName.textContent = item.name;
        this._profileDisc.textContent = item.disc;
    }
    getUserInfo() {
        this._userInfo = {};
        this._userInfo.userName = this._profileName.textContent;
        this._userInfo.userDisc = this._profileDisc.textContent;
        return this._userInfo;
    }
}

export { UserInfo }
