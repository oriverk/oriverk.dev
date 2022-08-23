interface ResponseError extends Error {
  status?: number;
  info?: any;
}

/**
 * https://docs.github.com/ja/rest/repos/contents#get-a-repository-readme
 * @param url
 * https://api.github.com/repos/{owner}/{repo}/readme
 * @returns
 */
export async function fetchReadme(url: string, type: 'raw' | 'html') {
  const token = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN;

  const res = await fetch(url, {
    ...(token && {
      headers: {
        // Accept: "application/vnd.github.v3+json",
        // Accept: "application/vnd.github.VERSION.html",
        Accept: `application/vnd.github.v3.${type}`,
        Authorization: `token ${token}`,
      },
    }),
  });

  if (!res.ok) {
    const error: ResponseError = new Error(
      "An error occurred while fetching the data."
    );
    error.info = res.json() || res.text();
    error.status = res.status;
    throw error;
  }

  const result = await res.text();
  return result
};