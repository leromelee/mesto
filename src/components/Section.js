class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;

        this._container = document.querySelector(containerSelector);
    }

    setItem(element, item) {

        if (item === 'initial') {
            this._container.append(this._renderer(element));
        }

        if (item === 'additional') {
            this._container.prepend(this._renderer(element));
        }

    }

    renderItems(data, item) {
        data.forEach((element) => {
            this.setItem(element, item);
        });
    }
}


export default Section
