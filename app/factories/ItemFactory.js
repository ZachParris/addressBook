// "use strict"; 
app.factory("itemStorage", function($q, $http, firebaseURL, AuthFactory){

	var getItemList = function(){
		var items = [];
		return $q(function(resolve, reject){
			$http.get(firebaseURL + "items.json")
				.success(function(itemObject){
					var itemCollection = itemObject;
					Object.keys(itemCollection).forEach(function(key){
						itemCollection[key].id=key;
						items.push(itemCollection[key]);
					});
					resolve(items);
				})
				.error(function(error){
					reject(error);
				});
		});
	}
	var deleteItem = function(itemId){
		return $q(function(resolve, reject){
			$http
            	.delete(firebaseURL + "items/" + itemId + ".json")
            	.success(function(objectFromFirebase){
            		resolve(objectFromFirebase);
            	})
		})
	};

	var postNewItem = function(newItem){
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + "items.json",
                JSON.stringify({
                    name: newItem.name,
                    phone: newItem.phone,
                    email: newItem.email,
                    favorites: newItem.favorites
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
	};

	var getSingleItem = function(itemId){
		return $q(function(resolve, reject){
			$http.get(firebaseURL + "items/" + itemId + ".json")
				.success(function(itemObject){
					resolve(itemObject);
				})
				.error(function(error){
					reject(error);
				});
		});
	}
	 
	 var updateItem = function(itemId, newItem){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "items/" + itemId + ".json",
                JSON.stringify({
                    name: newItem.name,
                    email: newItem.email,
                    phone: newItem.phone,
                    favorites: newItem.favorites
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    };

     var updateFavoritesStatus = function(newItem){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "items/" + newItem.id + ".json",
                JSON.stringify({
                    name: newItem.name,
                    email: newItem.email,
                    phone: newItem.phone,
                    favorites: newItem.favorites
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    };

	return {updateFavoritesStatus:updateFavoritesStatus, updateItem:updateItem, getSingleItem:getSingleItem, getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem};

});
	






