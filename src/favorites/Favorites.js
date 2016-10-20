export default function getFavoriteProducts() {
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

    updateLocalStorage(favorites);
}

function updateLocalStorage(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
