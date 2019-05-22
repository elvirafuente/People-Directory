const URL = 'https://randomuser.me/api/?results=50';

function fetchService() {
    return (
        fetch(URL)
            .then(response => response.json())
    )
}

export default fetchService;