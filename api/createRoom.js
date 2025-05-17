export default async function handler(req, res) {
  const HYPERBEAM_API_KEY = process.env.HYPERBEAM_API_KEY;

  const response = await fetch("https://engine.hyperbeam.com/v0/vm", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HYPERBEAM_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const data = await response.json();
  res.status(200).json(data);
}
