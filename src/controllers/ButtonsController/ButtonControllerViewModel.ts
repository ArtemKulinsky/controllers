import { action, makeObservable, observable } from 'mobx';

class ButtonControllerViewModel {
    @observable public text = '';

    constructor(defaultText?: string) {
        makeObservable(this);

        this.text = defaultText || '';
    }

    @action
    changeText = (newText: string) => {
        this.text = newText;
    };
}

export default ButtonControllerViewModel;
