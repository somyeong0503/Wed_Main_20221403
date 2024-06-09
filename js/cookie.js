
const setCookie = (name, value, expiredays) => {
    const date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = `${escape(name)}=${escape(value)}; expires=${date.toUTCString()}; path=/`;
};

const getCookie = (name) => {
    const cookie = document.cookie;
    if (cookie) {
        const cookieArray = cookie.split("; ");
        for (const cookieItem of cookieArray) {
            const [cookieName, cookieValue] = cookieItem.split("=");
            if (cookieName === name) {
                return cookieValue;
            }
        }
    }
    return null;
};
