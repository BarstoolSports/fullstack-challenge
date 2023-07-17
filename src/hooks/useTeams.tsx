import { useEffect, useState } from "react";

export function useTeams(sportsId: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.API_URL}/api/${sportsId}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, [sportsId]);

  return data;
}
