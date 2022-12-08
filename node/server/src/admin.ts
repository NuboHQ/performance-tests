import { readFileSync } from 'fs';
import { City, prismaRailway, prismaRender } from './prisma';
import { chunk } from 'lodash';
import { sequence } from './sequence';

const prisma = prismaRailway;

const max = 40000;
const chunkSize = 500;
const delay = 500;

const addCities = async (cities: City[], info: any) => {
  try {
    await prisma.city.createMany({ data: cities });
    console.log(info.index + 1, '/', info.total);
  } catch (error: any) {
    console.error(info.index + 1, error.message);
  }
};

(async () => {
  // await prisma.city.deleteMany();
  const citiess = await prisma.city.findMany();
  console.log(citiess.length);
  return;

  const citiesString = readFileSync('../../cities.json', 'utf-8');
  const cities = JSON.parse(citiesString).slice(0, max) as City[];
  const cityChunks = chunk(cities, chunkSize);

  console.log('Start:', cities.length);

  await prisma.city.deleteMany();

  console.log('Deleted current cities');

  await sequence({
    method: addCities,
    list: cityChunks,
    nextDelay: delay,
  });
})();
