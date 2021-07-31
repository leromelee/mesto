class UserInfo {
    constructor({ nameSelector, discSelector, avatarSelector }) {
        this._nameSelector = nameSelector;
        this._discSelector = discSelector;
        this._avatarSelector = avatarSelector;


        this._profileName = document.querySelector(this._nameSelector);
        this._profileDisc = document.querySelector(this._discSelector);
        this._profileAvatar = document.querySelector(this._avatarSelector);
    }

    editAvatar(item) {
        this._profileAvatar.src = item.avatar;
    }

    getUserInfo() {
        const userInfoData = {};


        userInfoData.profileName = this._profileName.textContent;
        userInfoData.profileDisc = this._profileDisc.textContent;
        userInfoData.profileAvatar = this._profileAvatar.src;

        return userInfoData;
    }

    setUserInfo(item) {
        this._profileName.textContent = item.name;
        this._profileDisc.textContent = item.about;
        this._profileAvatar.src = item.avatar;
    }


}


export default UserInfo
