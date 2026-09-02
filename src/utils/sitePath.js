const basePath = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

const sitePath = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}` || "/";
};

export default sitePath;
