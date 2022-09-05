const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`

const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']

const inserty = ['the soup kitchen', 'Disneyland', 'the White House']

const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {

    const newStory = storyText
    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);



    if (customName.value !== '') {
        const name = customName.value;
        newStory.replace('Bob', name);

    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0, 071428);
        const temperature = Math.round((94 - 32) * 5 / 9);
        newStory.replace('94 fahrenheit', weight);
        newStory.replace('300 pounds', temperature);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}