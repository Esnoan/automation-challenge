import { generateUUID } from './UUID';

const agent = require('superagent');

const baseUrl = 'https://randomuser.me/api/?inc=name,id,phone';

export async function generateUser(): Promise<User> {
  const query = {
    dataType: 'json'
  };
  const response = await agent.get(baseUrl).query(query);
  const userJson = response.body.results[0];

  const data = {
    name: userJson.name.first,
    lastName: userJson.name.last,
    telephone: userJson.phone,
    identification: generateUUID()
  };

  const user = new User(data);
  return user;
}

export class User {
  private name: string;
  private lastName: string;
  private telephone: string;
  private identification: string;
  constructor({
    name,
    lastName,
    telephone,
    identification
  }: { name?: string; lastName?: string; telephone?: string; identification?: string } = {}) {
    this.name = name;
    this.lastName = lastName;
    this.telephone = telephone;
    this.identification = identification;
  }

  public getName(): string {
    return this.name;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getTelephone(): string {
    return this.telephone;
  }

  public getIdentification(): string {
    return this.identification;
  }
}
