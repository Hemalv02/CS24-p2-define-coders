import { apiRoutes } from "@/data/apiRoutes";
import { jwtToken } from "@/data/cookieNames";
import { getCookie } from "@/lib/cookieFunctions";
import { message } from "antd";
import axios from "axios";

export async function fetchAllPermissons() {
  try {
    const token = getCookie(jwtToken);
    const response = await axios.get(apiRoutes.rbac.fetchAllPermissons, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //console.log(response.data);
    return response.data.map((permisson: any) => {
      return {
        name: permisson.name,
        description: permisson.description,
      };
    });
  } catch (error: any) {
    message.error(error?.response?.data?.message + "Error fetching permissons... Are you authorized?");    
  }
}
