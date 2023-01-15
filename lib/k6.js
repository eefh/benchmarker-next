import http from "k6/http";
import { check, sleep } from "k6";

export default function () {
    const res = http.get("https://test-api.k6.io/");
    check(res, {
        "protocol is HTTP/2": (r) => r.proto === "HTTP/2.0",
    });
    sleep(1);
}
