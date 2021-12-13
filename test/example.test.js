// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDogCard } from '../render-utils';

const test = QUnit.test;

test('renderDogCard', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testDog = {
        name: 'Finicky',
        breed: 'dachshund',
        id: 1
    };

    const expected = '<a href="./detail/?id=1"><div class="dog-card"><p>Finicky</p><img src="./assets/dachshund.jpeg"></div></a>';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(testDog).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('renderDogDetail', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = 
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = 

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
