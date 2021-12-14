// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDogCard } from '../render-utils.js';

const test = QUnit.test;

test('renderDogCard should take in a dog and return an appropriate DOM element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testDog = {
        name: 'fluffy',
        breed: 'red heeler',
        id: 3
    };

    const expected = '<a href=\"./detail/?id=3\"><div class=\"dog-card\"><p>fluffy</p><img src=\"./assets/red heeler.jpeg\"></div></a>';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(testDog);
    
    // console.log(actual);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'the string representation of the actual element should be the same as described in the test');
});


/* test('renderDogDetail', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = 
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = 

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
}); */
