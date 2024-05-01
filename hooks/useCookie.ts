"use client";

import Cookies from "js-cookie";
import { useMemo } from "react";

function useCookie() {
  const setCookie = (
    key: string,
    value: string,
    options?: Cookies.CookieAttributes
  ) => {
    Cookies.set(key, value, options);
  };

  const getCookie = (key: string) => {
    return Cookies.get(key);
  };

  const removeCookie = (key: string, options?: Cookies.CookieAttributes) => {
    Cookies.remove(key, options);
  };

  return useMemo(() => {
    return {
      setCookie,
      getCookie,
      removeCookie,
    };
  }, []);
}

export { useCookie };
