export function getFavoriteProducts() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

export function addIdToFavorites(productId) {

    var favorites = getFavoriteProducts();

    if (favorites.indexOf(productId) === -1) {
        favorites.push(productId);

    } else {
        favorites = favorites.filter(function(id) {
            return id !== productId;
        });
    }

    updateLocalStorage(favorites.sort());
}

function updateLocalStorage(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
