import { Logtail } from "@logtail/node";
import { headers } from "next/headers";

export function logPageView() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  const logtail = new Logtail("sW8m24A6ZV9t9t4H3LetgYE9");
  const headersList = headers();
  const userAgent = headersList.get("User-Agent");
  const referer = headersList.get("Referer");
  const ua = headersList.get("Sec-Ch-Ua");
  const platform = headersList.get("Sec-Ch-Ua-Platform");
  const mobile = headersList.get("Sec-Ch-Ua-Mobile");
  logtail.info("PageView", {
    "User-Agent": userAgent,
    Referer: referer,
    "Sec-Ch-Ua": ua,
    "Sec-Ch-Ua-Platform": platform,
    "Sec-Ch-Ua-Mobile": mobile,
  });
}
