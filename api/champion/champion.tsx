export const champion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json"
  );
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};
