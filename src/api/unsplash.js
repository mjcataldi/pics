import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2db92c0ec16c6c2c3893e67253393905184997a31d2e8206101c3d1579c65652"
  }
});
