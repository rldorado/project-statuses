const API_SERVER = "https://homeassignment.scoro.com/api/v2/";
const apiKey = "ScoroAPI_2c132f6c8726725";
const company_account_id = "apiplayground";

const requestOptions: RequestInit = {
  method: "POST",
  body: JSON.stringify({
    apiKey,
    company_account_id,
  }),
  redirect: "follow",
};

const httpClientRequest = async (path: string): Promise<any> => {
  const response = await fetch(`${API_SERVER}${path}`, requestOptions);
  return response.json();
};

export default httpClientRequest;
