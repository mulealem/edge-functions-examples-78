export default async (request) => {
  return new Response("Hello, Mars!", {
    headers: { "content-type": "text/html" },
  });
};
