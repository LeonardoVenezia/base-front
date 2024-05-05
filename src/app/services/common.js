const domain = process.env.NEXT_PUBLIC_API;
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION;

const makeOptions = (
  method = 'GET',
  body,
  headers,
) => {
  return {
    method,
    headers,
    body: JSON.stringify(body),
  }
};

export async function commonService(
    url,
    method= 'GET',
    body= {},
    headers= { 'Content-Type': 'application/json' },
  ) {

  const options = method === 'GET'
    ? null
    : makeOptions(method, body, headers);

  let response;

  try {
    const happyResponse = await fetch(`${domain}${apiVersion}${url}`,
      options
    );

    const data = await happyResponse.json();
    data.ok = true;
    data.status = happyResponse.status;
    response = data;
  } catch (error) {
    response = {
      status: 500,
      error: error,
      ok: false,
    }
  };
  return response;
};
