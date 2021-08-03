const getCookie = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split('; Authorization=');

  if (parts.length >= 2) return parts.pop().split(';').shift();
};

const setCookie = token => {
  document.cookie = `Authorization=${token};`;
};

const delCookie = () => {
  document.cookie = `Authorization=; expires=${new Date(
    '1999-01-01',
  ).toUTCString()};`;
};

const token = getCookie();

export { getCookie, setCookie, delCookie, token };