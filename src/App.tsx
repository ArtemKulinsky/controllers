import React from 'react';

import ButtonControllerView from './controllers/ButtonsController/ButtonControllerView';
import ButtonControllerViewModel from './controllers/ButtonsController/ButtonControllerViewModel';
import AutocompletesControllerView from './controllers/AutocompletesController/AutocompletesControllerView';
import AutocompletesControllerViewModel from './controllers/AutocompletesController/AutocompletesControllerViewModel';

import './App.scss';

function App() {
    const buttonsControllerViewModel1 = new ButtonControllerViewModel();
    const buttonsControllerViewModel2 = new ButtonControllerViewModel();
    const autocompletesControllerViewModel1 = new AutocompletesControllerViewModel({
        maxPrompts: 3,
    });
    const autocompletesControllerViewModel2 = new AutocompletesControllerViewModel({
        maxPrompts: 10,
    });

    return (
        <main>
            <h2>Button Controller 1</h2>
            <ButtonControllerView
                viewModel={buttonsControllerViewModel1}
                buttonsRight={[
                    { text: 'Clean', onClick: () => buttonsControllerViewModel1.changeText('') },
                    {
                        text: 'Hello World!',
                        onClick: () => buttonsControllerViewModel1.changeText('Hello world!'),
                    },
                ]}
            />
            <h2>Button Controller 2</h2>
            <ButtonControllerView
                viewModel={buttonsControllerViewModel2}
                buttonsLeft={[
                    { text: 'Alert', onClick: () => alert(buttonsControllerViewModel2.text) },
                ]}
                buttonsRight={[
                    {
                        text: 'Alert if number',
                        onClick: () => {
                            if (/^\d+$/.test(buttonsControllerViewModel2.text)) {
                                alert(buttonsControllerViewModel2.text);
                            }
                        },
                    },
                ]}
            />

            <h2>Autocompletes Controller 1 </h2>
            <AutocompletesControllerView viewModel={autocompletesControllerViewModel1} />
            <h2>Autocompletes Controller 2</h2>
            <AutocompletesControllerView viewModel={autocompletesControllerViewModel2} />
        </main>
    );
}

export default App;
