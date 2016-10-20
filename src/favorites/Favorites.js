export function getFavoriteProducts() {
    return JSON.parse(localStorage.getItem('favoriteProductIds')) || [];
}

const currentFavorites = getFavoriteProducts()
export default currentFavorites;

export function addIdToFavorites(productId) {

    var favoriteProductIds = getFavoriteProducts();

    favoriteProductIds.indexOf(productId) === -1 ?
        favoriteProductIds.push(productId) :
        favoriteProductIds = favoriteProductIds.filter(function(id) {
            return id !== productId;
        });


    updateLocalStorage(favoriteProductIds);
}

function updateLocalStorage(favoriteProductIds) {
    localStorage.setItem('favoriteProductIds', JSON.stringify(favoriteProductIds));
}
