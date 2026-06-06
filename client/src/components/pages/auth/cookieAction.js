


export function setCookieForRememberMe(email, password, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `email=${email}; ${expires}`;
  document.cookie = `password=${password}; ${expires}`;
}

export function setCookieForResetPass(resetEmail, min) {
  const date = new Date();
  date.setTime(date.getTime() + min * 60 * 1000);

  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `resetEmail=${resetEmail}; ${expires}`;
}

export function getCookie(name) {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }

  return name === "token" || name === "user" ? null : "";
}



// Save token
export function setToken(token) {
  localStorage.setItem("token", token);
}

// Get token
export function getToken() {
  return localStorage.getItem("token");
}

// Remove token
export function removeToken() {
  localStorage.removeItem("token");
}

// Save user object
export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// Get user object
export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// Remove user
export function removeUser() {
  localStorage.removeItem("user");
}
