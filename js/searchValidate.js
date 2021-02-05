const formSearch = document.getElementById('formSearchId');
function searchValidate() {
    formSearch.classList.remove('is-invalid');
    var searchBar = document.getElementById('searchId');
    if (!searchValidation(searchBar.value)) {
        searchBar.classList.add("is-invalid");
        return false;
    } else {
        return true;
    }
}

function searchValidation(searchBar) {
    var regexSearch = /(?=.{3,})/;
    return regexSearch.test(searchBar) ? true : false;
}