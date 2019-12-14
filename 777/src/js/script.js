window.onload = function () {

  var listingElements = ['apple', 'orange'];
  var storeElements = [];
  var clearAllButton = document.querySelector('#clear-all');
  var addListing = document.querySelector('#add-item');
  var sortButton = document.querySelector('#sort-button');
  var listingDeleteButton = document.querySelector('#delete-button');
  var storeDeleteButton = document.querySelector('#button-delete');

  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  //delete selected item from listing
  function deleteElement(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
    }
  }

  listingDeleteButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    deleteElement(selectedOption.innerText);
    updateUI();
  }
  // delete selected item from store
  function deleteElemment(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.splice(elementPosition, 1);
    }
  }

  storeDeleteButton.onclick = function () {
    var selectedOption = document.querySelector('.store-select option:checked');
    deleteElemment(selectedOption.innerText);
    updateUI();
  }

  function clearAll() {
    listingElements = [];
    storeElements = [];
  }

  clearAllButton.onclick = function () {
    clearAll();
    updateUI();
  }

  function addNewItem() {
    var result = prompt('add new item');
    listingElements.push(result);
  }

  addListing.onclick = function () {
    addNewItem();
    updateUI();
  }

  function sortStore() {
    storeElements.sort();
  }

  sortButton.onclick = function () {
    sortStore();
    updateUI();
  }


  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  var addButton = document.querySelector('#add-button');

  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  }
};