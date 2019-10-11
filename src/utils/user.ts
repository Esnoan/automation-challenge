const agent = require('superagent');

const baseUrl = 'https://randomuser.me/api/?inc=name,id,phone';

export async function generateUser(): Promise<User> {
  const query = {
    dataType: 'json'
  };
  const response = await agent.get(baseUrl).query(query);
  const userJson = response.body.results[0];

  return {
    name: userJson.name.first,
    lastName: userJson.name.last,
    telephone: userJson.phone,
    identification: userJson.id.value
  };
}

export class User {
  name: string;
  lastName: string;
  telephone: string;
  identification: string;
}
