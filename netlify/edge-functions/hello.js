const ip = require("ip");

export default async (request) => {
  return new Response(
    {
      ip: ip.address(),
    },
    {
      headers: { "content-type": "application/json;charset=UTF-8" },
    }
  );
};
