const handleClick = async () => {
    const shortLink = await generateShortLink(document.querySelector('#link').value, 6, 'cute cat');
    document.querySelector('#result').innerText = shortLink;
}

const generateShortLink = (link,length, uniquePhrase = '') => {
    const loader = document.querySelector('#loader');
    let shortLink = '';
    const encodeLink = btoa(uniquePhrase? link + uniquePhrase : link);(uniquePhrase? link + uniquePhrase : link);
    for ( let i = 0; i < length; i++ ) {
        shortLink += encodeLink.charAt(Math.floor(Math.random() * encodeLink.length));
    }
    //simulate the server delay
    return new Promise((resolve, reject) => {
        loader.style.display = 'block';
        document.querySelector('#result').innerText = '';
        setTimeout(() => {
            resolve(`https://bitly.com/${shortLink}`);
            loader.style.display = 'none';
        }, Math.random() * 1500)
    })
};

document.querySelector('#button').addEventListener("click", handleClick);