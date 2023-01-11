import { action, makeObservable, observable } from 'mobx';

import { CountryInfo, getCountryByName } from '../../api/apiService';
import { getArrayWithoutDuplicateObjectsByField } from '../../helpers';

class AutocompletesControllerViewModel {
    @observable public text = '';

    @observable public prompts: CountryInfo[] = [];
    @observable public isLoadingPrompts = false;

    private readonly maxPrompts: number | null = null;

    constructor(options?: { maxPrompts?: number | null; defaultText?: string }) {
        makeObservable(this);

        const { maxPrompts, defaultText } = options || {};

        if (defaultText) {
            this.changeText(defaultText);
        }
        if (maxPrompts) {
            this.maxPrompts = maxPrompts;
        }
    }

    @action
    changeText = (newText: string, fetchPrompts = true) => {
        if (!newText) {
            this.text = '';
            this.prompts = [];

            return;
        }

        this.text = newText;

        if (!fetchPrompts) {
            this.prompts = [];
            return;
        }

        this.isLoadingPrompts = true;
        getCountryByName(newText).then(countries => {
            if (this.text === newText) {
                this.prompts = getArrayWithoutDuplicateObjectsByField(countries, 'fullName').slice(
                    0,
                    this.maxPrompts || countries.length,
                );
                this.isLoadingPrompts = false;
            }
        });
    };
}

export default AutocompletesControllerViewModel;
