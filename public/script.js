const getStats = async () => {
  const url = 'https://api.vsrodionov.ru/getStats';
  const headers = {
    'Content-type': 'application/json',
  };
  return fetch(url, {
    method: 'GET',
    headers: headers,
  }).then(data => data.json());
};

const setMainInfo = data => {
  const usersCount = document.querySelector('#userscount');
  const gamesCount = document.querySelector('#gamescount');
  const botstarted = document.querySelector('#botstarted');
  const refstarted = document.querySelector('#refstarted');

  usersCount.textContent = data.users.length;
  gamesCount.textContent = data.stats.gamesCount;
  botstarted.textContent = data.stats.botStarted;
  refstarted.textContent = data.stats.refStarted;
};

const getElement = () => {
  const template = document.querySelector('#user-template').content;
  const element = template.cloneNode(true);
  return element;
};

const generateUser = ({ vkId, points }) => {
  const element = getElement();
  const id = element.querySelector('.user__id');
  const pointsElement = element.querySelector('.user__points');

  id.textContent = vkId;
  pointsElement.textContent = points;

  return element;
};

const createUsers = users => {
  const table = document.querySelector('.table');
  users.forEach(user => {
    table.append(generateUser(user));
  });
};

getStats().then(data => {
  setMainInfo(data);
  createUsers(data.users);
});
