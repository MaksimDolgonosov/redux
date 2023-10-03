const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });

const rnd = () => {
    const value = ((Math.random() * ((50 - (-50)))) - 50).toFixed(0);
    return ({ type: "RND", payload: value });
}

export {inc, dec, rnd};