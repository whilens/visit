import type { CardData } from './types';

const query = `{
  card {
    profile {
      id name nameEn role roleEn tagline taglineEn bio bioEn
      email telegram github photoUrl education educationEn yearsExperience
    }
    skills { id name category categoryEn level sort }
    projects { id title titleEn summary summaryEn url highlights highlightsEn stack sort }
    experiences { id company companyEn role roleEn period periodEn items itemsEn sort }
  }
}`;

export async function fetchCard(): Promise<CardData> {
  const res = await fetch(import.meta.env.VITE_GRAPHQL_URL ?? '/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();
  if (!json.data?.card) {
    throw new Error(json.errors?.[0]?.message ?? 'empty card');
  }
  return json.data.card;
}
