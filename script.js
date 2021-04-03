let messageStrings = {
stringOne: ['Love', 'Gratitude', 'Trust', 'Calm mind'],
stringTwo: ['to achieve your higest good.', 'to feel your inner being grow.', 'to experience the beauty of life.', 'tocreate tthe life of your dreams.'],
stringThree: ['spend time in nature', 'get dog', 'meditate daily', 'avoid social media']
}

function generateRandomNumber(num){
return Math.floor(Math.random()* num)
}

let personalMessage =[]
for (let string in messageStrings){
let index = generateRandomNumber(messageStrings[string].length)

switch (string){
    case 'stringOne':
personalMessage.push(`What is needed now: ${messageStrings[string][index]} `);
break;
case 'stringTwo':
personalMessage.push(`Why is needed: ${messageStrings[string][index]}`);
break;
case 'stringThree':
personalMessage.push(`What to do: ${messageStrings[string][index]}`);
break;
default:
personalMessage.push('Not enough info.');
}
}

  function formatWisdom(wisdom) {
    const formatted = personalMessage.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalMessage);