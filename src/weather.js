import { createFetch, base, accept, parse } from "http-client";
import format from "date-fns/format";

const fetch = createFetch(
  base("https://temp-api-dysbspejqd.now.sh"),
  accept("application/json"),
  parse("json", "data"),
);

export default function getWeather() {
  return new Promise((resolve) => {
    fetch().then(({ data }) => {
      resolve({
        current: data.Temperature,
        time: format(new Date(data.time_utc * 1000), "HH:mm"),
      });
    });
  });
}
