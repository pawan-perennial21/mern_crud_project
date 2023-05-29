import axios, { AxiosResponse } from "axios";

export async function fetchData<T>(url: string): Promise<T> {
    try {
        const response: AxiosResponse<T> = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
