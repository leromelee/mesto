class Api {
    constructor(settings) {

        this._settings = settings;
        this._url = settings.url;
        this._content = settings.headers['Content-Type'];
        this._fullAuthoriz = settings.headers.authorization;

    }

    /* GET BLOCK */


    getInitialCards() {
        return fetch(`${this._url}cards`, {
                method: 'GET',
                headers: {
                    authorization: this._fullAuthoriz,
                    'Content-Type': this._content
                }
            })
            .then(this._CheckReject);
    }


    getUserInfo() {
        return fetch(`${this._url}users/me`, {
                method: 'GET',
                headers: {
                    authorization: this._fullAuthoriz,
                    'Content-Type': this._content
                }
            })
            .then(this._CheckReject);
    }


    /* POST BLOCK */

    postAddCard(data) {
        return fetch(`${this._url}cards`, {
                method: 'POST',
                headers: {
                    authorization: this._fullAuthoriz,
                    'Content-Type': this._content
                },
                body: JSON.stringify({
                    name: data.name,
                    link: data.link
                })
            })
            .then(this._CheckReject);
    }


    /*     PUT BLOCK */


    setLike(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: this._fullAuthoriz,
                    'Content-Type': this._content
                }
            })
            .then(this._CheckReject);
    }

    /* PATCH BLOCK */

    editAvatar(data) {
        return fetch(`${this._url}users/me/avatar`, {
                method: 'PATCH',
                headers: {
                    authorization: this._fullAuthoriz,
                    'Content-Type': this._content
                },
                body: JSON.stringify({
                    avatar: data.link
                })
            })
            .then(this._CheckReject);
    }

    patchUserInfo(data) {
        return fetch(`${this._url}users/me`, {
                method: 'PATCH',
                headers: {
                    authorization: this._fullAuthoriz,
                    'Content-Type': this._content
                },
                body: JSON.stringify({
                    name: data.name,
                    about: data.description
                })
            })
            .then(this._CheckReject);
    }

    /* DELETE BLOCK */

    deletePhoto(id) {
        console.log(id);
        return fetch(`${this._url}cards/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._fullAuthoriz,
                    'Content-Type': this._content
                }

            })
            .then(this._CheckReject);
    }

    deleteLike(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._fullAuthoriz,
                    'Content-Type': this._content
                }
            })
            .then(this._CheckReject);
    }


    /* REJECT */

    _CheckReject(res) {
        if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
    }
}

export default Api
