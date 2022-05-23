interface ResponseError extends Error {
  status?: number;
  info?: any;
}

/**
 * https://docs.github.com/ja/rest/repos/contents#get-repository-content
 * @param url
 * https://api.github.com/repos/{owner}/{repo}/contents/{path}
 * @returns
 */
export const fetcher = (url: string) => {
  const token = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN;

  return fetch(url, {
    ...(token && {
      headers: {
        // Accept: "application/vnd.github.v3+json",
        // Accept: "application/vnd.github.VERSION.html",
        Accept: "application/vnd.github.v3.raw",
        Authorization: `token ${token}`,
      },
    }),
  }).then(res => {
    if (!res.ok) {
      const error: ResponseError = new Error(
        "An error occurred while fetching the data."
      );

      error.info = res.json();
      error.status = res.status;
      throw error;
    }
    return res.json()
  })
};

/**
 * https://docs.github.com/ja/rest/repos/contents#get-a-repository-readme
 * @param url
 * https://api.github.com/repos/{owner}/{repo}/readme
 * @returns
 */
export const readmeFetcher = (url: string, type: 'raw' | 'html') => {
  const token = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN;

  return fetch(url, {
    ...(token && {
      headers: {
        // Accept: "application/vnd.github.v3+json",
        // Accept: "application/vnd.github.VERSION.html",
        Accept: `application/vnd.github.v3.${type}`,
        Authorization: `token ${token}`,
      },
    }),
  }).then(res => {
    if (!res.ok) {
      const error: ResponseError = new Error(
        "An error occurred while fetching the data."
      );

      error.info = res.json() || res.text();
      error.status = res.status;
      throw error;
    }
    return res.text()
  })
};
