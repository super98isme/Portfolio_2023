

var Airtable = require('airtable');

var base = new Airtable({apiKey: 'keysB9c0oyfbHHQjo'}).base('appfjsaZpz1Goa7dj');
var content = document.querySelector(".content");
var fetchRecord = function(slug, recordID) {
  if (!slug) {
    content.style.display = "none";
    console.log('No slug provided');
    return;
  }

  // var record = record.id;
base('Illustration').find(recordID, function(err, record) {
  
  if (err) { console.error(err); return; }
  console.log('Retrieved', record.id);

    var title = document.querySelector(".title");
    title.innerHTML = record.fields.Name;
 
    

  if(record.fields.Date){
    var date = document.querySelector(".date");
    date.innerHTML = record.fields.Date;
  }

  if(record.fields.FaceImage){
    
    var faceImage = document.querySelector(".face-image");

    var image = document.createElement('img');
      image.setAttribute('src', record.fields.FaceImage[0].url);
      faceImage.appendChild(image);
  }

  if(record.fields.Tagline){
    var tagline = document.querySelector(".tagline");
    tagline.innerHTML = record.fields.Tagline;
  }

  if(record.fields.Description){
      var description = document.querySelector(".description");
      description.innerHTML = record.fields.Description;
  }

  var videoContainer = document.querySelector(".video-container");

    if(record.fields.Video){
    var video = document.createElement('video');
    video.setAttribute('controls', 'controls');
    video.setAttribute('src', record.fields.Video[0].url);
    video.autoplay = false;
    videoContainer.appendChild(video);
    }

    var mainPictures = document.querySelector(".main-pictures");
    var img;
    var image;
          // Get the modal
          var modal = document.getElementById("myModal");
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
          var captionText = document.getElementById("caption");

  
    record.fields.MainPictures.forEach(function(attachment) {

      image = document.createElement('img');
      image.setAttribute('src', attachment.url);
      image.setAttribute('id', "myImg");
      mainPictures.appendChild(image);
      img = document.getElementById("myImg");
      
      image.addEventListener('click', function (){
        img = document.getElementById("myImg");
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      })
    });

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() { 
        modal.style.display = "none";
      }

    

     //CREATE DYNAMIC LINK TO PROCESS
    var processLink = document.querySelector(".process-link");
    var anchor = document.createElement('a');
    var link = 'process.html?' + record.fields.Slug + '-' + record.id;
    anchor.setAttribute('href', link);
    anchor.setAttribute('target', "_blank");
    anchor.innerHTML = "<" + link + ">" + "Process";
    processLink.appendChild(anchor);

});
}


var makeNavigation = function() {
  var navigation = document.querySelector('.navigation-container');
  var navigationContainer = document.querySelector(".navigation-container");
  var navigationName = document.querySelector(".navigation-name");

  base('Illustration').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
      // Create list item
      var listItem = document.createElement('div');
      listItem.setAttribute("class", "navigation-image");
      // Create anchor
      var anchor = document.createElement('a');
      var link = 'illustration.html?' + record.fields.Slug + '-' + record.id;
      anchor.setAttribute('href', link);
      anchor.setAttribute("class", "navigation-name");
      anchor.innerHTML = record.fields.Name;

      if (record.fields.FaceImage && record.fields.FaceImage.length > 0) {
        // Create image
        var image = document.createElement('img');
        var src = record.fields.FaceImage[0].url;
        image.setAttribute('src', src);

        // navigationName.innerHTML = record.fields.Name;
        
        anchor.appendChild(image);
        // anchor.appendChild(navigationName);
      } else {
        anchor.innerHTML = link;
      }

      

      // Append HTML to the navigation element
      listItem.appendChild(anchor);

      navigation.appendChild(listItem);
      // navigation.appendChild(anchor);

    });
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
}


document.addEventListener('DOMContentLoaded', function (event) {
  // DOM Loaded!
        var searchParam = document.location.search;
        
        var slug = searchParam.substring(1);
        var recordID = slug.split('-').pop();
        // console.log(recordID);

        makeNavigation();
        fetchRecord(slug, recordID);
});
