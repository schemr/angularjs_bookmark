angular.module("ngBookmark.bookmark.service")
 .value('mogolabApiKey','BraiD4mQkKDv8x5Tp3Sr-C8wFa7Zuf3J') //개인 API-KEY로 변경해야 함
 .factory('Bookmark', ['$resource','mogolabApiKey',function ($resource,mogolabApiKey) {
  var bookmarkResource = $resource('https://api.mongolab.com/api/1/databases/sample/collections/bookmarks/:bookmarkId?apiKey=:apiKey',{
   apiKey: mogolabApiKey
  },{
   'update' : {
    method: 'PUT'
   }
  });

  return bookmarkResource;
 }]);