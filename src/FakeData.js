import faker from 'faker';

export default (rows = 10) => {
  const data = [];
  for(let i = 0; i < rows; i++) {
    const row = faker.helpers.createCard()
    data.push({
      name: row.name,
      username: row.username,
      email: row.email,
      phone: row.phone,
      website: row.website
    });
  }
  return data;
}