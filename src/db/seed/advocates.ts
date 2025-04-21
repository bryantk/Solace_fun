import db from "..";
import { advocates } from "../schema";

const specialties = [
  "Bipolar",
  "LGBTQ",
  "Medication/Prescribing",
  "Suicide History/Attempts",
  "General Mental Health (anxiety, depression, stress, grief, life transitions)",
  "Men's issues",
  "Relationship Issues (family, friends, couple, etc)",
  "Trauma & PTSD",
  "Personality disorders",
  "Personal growth",
  "Substance use/abuse",
  "Pediatrics",
  "Women's issues (post-partum, infertility, family planning)",
  "Chronic pain",
  "Weight loss & nutrition",
  "Eating disorders",
  "Diabetic Diet and nutrition",
  "Coaching (leadership, career, academic and wellness)",
  "Life coaching",
  "Obsessive-compulsive disorders",
  "Neuropsychological evaluations & testing (ADHD testing)",
  "Attention and Hyperactivity (ADHD)",
  "Sleep issues",
  "Schizophrenia and psychotic disorders",
  "Learning disorders",
  "Domestic abuse",
];

// Not important, but I wanted to emulate providers favoring fewer specialties over truely random
function randomLowerBias(min: number, max: number, bias: number = 2) {
  const rand = Math.random();
  const biasedRand = Math.pow(rand, bias);
  return Math.floor(biasedRand * (max - min + 1)) + min;
}

function randomSpecialties(): string[] {
  // Based on length of source list rather than magic constant
  const totalSpecialties = specialties.length
  // Randomize sort of specialties (good enough for dev use)
  var randomSpecialties = [...specialties].sort(() => Math.random() - 0.5)
  // retrun randomly 1 to all specialties
  return randomSpecialties.slice(0, randomLowerBias(1, totalSpecialties))
};

// Should just use mocking utils, generate X number of entries with XYZ...
// walking away from this now
const advocateData = [
  {
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5551234567,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    city: "Los Angeles",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5559876543,
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    city: "Chicago",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5554567890,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    city: "Houston",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5556543210,
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    city: "Phoenix",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5553210987,
  },
  {
    firstName: "Chris",
    lastName: "Martinez",
    city: "Philadelphia",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5557890123,
  },
  {
    firstName: "Jessica",
    lastName: "Taylor",
    city: "San Antonio",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5554561234,
  },
  {
    firstName: "David",
    lastName: "Harris",
    city: "San Diego",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5557896543,
  },
  {
    firstName: "Laura",
    lastName: "Clark",
    city: "Dallas",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5550123456,
  },
  {
    firstName: "Daniel",
    lastName: "Lewis",
    city: "San Jose",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5553217654,
  },
  {
    firstName: "Sarah",
    lastName: "Lee",
    city: "Austin",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5551238765,
  },
  {
    firstName: "James",
    lastName: "King",
    city: "Jacksonville",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5556540987,
  },
  {
    firstName: "Megan",
    lastName: "Green",
    city: "San Francisco",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5559873456,
  },
  {
    firstName: "Joshua",
    lastName: "Walker",
    city: "Columbus",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5556781234,
  },
  {
    firstName: "Amanda",
    lastName: "Hall",
    city: "Fort Worth",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: randomLowerBias(1, 20, 1),
    phoneNumber: 5559872345,
  },
];

export { advocateData };
