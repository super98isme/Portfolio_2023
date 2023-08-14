var Airtable = require('airtable');

var base = new Airtable({apiKey: 'keysB9c0oyfbHHQjo'}).base('appfjsaZpz1Goa7dj');

////FETCH RECORD UJSING SELECT METHOD////

// var fetchRecord = function(slug) {
//   if (!slug) {
//     console.log('No slug provided, cancelling API call');
//     return;
//   }

//   var formula = 'Slug="' + slug + '"';

//   var title = document.querySelector(".title");
//   var process1 = document.querySelector(".process1");
//   var processImages = document.querySelector(".process-images");
//   var processImages = document.querySelector(".process-images");
//   var process2 = document.querySelector(".process2");

//   base('Installation').select({
//     filterByFormula: formula,
//     maxRecords: 1,
//     view: "Grid view"
//   }).eachPage(function page(records, fetchNextPage) {
//     records.forEach(function(record) {
//     title.innerHTML = record.fields.Name;
//     process1.innerHTML = record.fields.Process1;
//     record.fields.ProcessPictures.forEach(function(attachment) {
//         var image = document.createElement('img');
//         image.setAttribute('src', attachment.url);
//         processImages.appendChild(image);
//         // console.log(record.fields.ProcessPictures[attachment].url);
//       });
//       process2.innerHTML = record.fields.Process2;
//    });
//   }, function done(err) {
//     if (err) { console.error(err); return; }
//   });
//     // console.log('Retrieved', record.id);

//   }

////FETCH RECORD USING FIND METHOD////

  var fetchRecord = function(slug, recordID) {
    if (!slug) {
      console.log('No slug provided, cancelling API call');
      return;
    }

    // var record = record.id;

base('Installation').find(recordID, function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);

    var title = document.querySelector(".title");
    title.innerHTML = record.fields.Name;

   if(record.fields.ProcessPictures){
     var processImages = document.querySelector(".process-images");
     record.fields.ProcessPictures.forEach(function(attachment) {
        var image = document.createElement('img');
        image.setAttribute('src', attachment.url);
        processImages.appendChild(image);
        // console.log(record.fields.ProcessPictures[attachment].url);
      });
   }

// var processContainer = document.querySelector("process-container");
//  processContainer.forEach(function(process){
//    process.innerHTML = record.fields
//  });

// PROCESS DESCRIPTION  
   
 var process1 = document.querySelector(".process1");
   process1.innerHTML = record.fields.Process1;

   if(record.fields.Process2){ 
   var process2 = document.querySelector(".process2");
    process2.innerHTML = record.fields.Process2;
   }
   
   if(record.fields.Process3){
    var process3 = document.querySelector(".process3");
    process3.innerHTML = record.fields.Process3;
   }
   
   if(record.fields.Process4){
    var process4 = document.querySelector(".process4");
    process4.innerHTML = record.fields.Process4;
   }

   if(record.fields.Process5){
    var process5 = document.querySelector(".process5");
    process5.innerHTML = record.fields.Process5;
   }
   
   if(record.fields.Process6){
    var process6 = document.querySelector(".process6");
    process6.innerHTML = record.fields.Process6;
   }


//  SELECT IMAGES 

   if(record.fields.Select1){
    var image = document.createElement('img');

     var select1 = document.querySelector(".image-1");
     image.setAttribute('src', record.fields.Select1[0].url);
     select1.appendChild(image);
   }

   if(record.fields.Select2){
    var image = document.createElement('img');

    var select2 = document.querySelector(".image-2");
    image.setAttribute('src', record.fields.Select2[0].url);
    select2.appendChild(image);
  }

  if(record.fields.Select3){
    var image = document.createElement('img');

    var select3 = document.querySelector(".image-3");
    image.setAttribute('src', record.fields.Select3[0].url);
    select3.appendChild(image);
  }
  if(record.fields.Select4){
    var image = document.createElement('img');

    var image = document.createElement('img');

    var select4 = document.querySelector(".image-4");
    image.setAttribute('src', record.fields.Select4[0].url);
    select4.appendChild(image);
  }
  if(record.fields.Select5){
    var image = document.createElement('img');

    var select5 = document.querySelector(".image-5");
    image.setAttribute('src', record.fields.Select5[0].url);
    select5.appendChild(image);
  }
  if(record.fields.Select6){
    var image = document.createElement('img');

    var select6 = document.querySelector(".image-6");
    image.setAttribute('src', record.fields.Select6[0].url);
    select6.appendChild(image);
  }

  if(record.fields.Outtakes){
    var outtakes = document.querySelector(".outtakes");
    outtakes.innerHTML = record.fields.Outtakes;
  }

  // if(record.fields.ProcessPictures){
  //   var select = document.querySelector(".image-container");
  //   record.fields.ProcessPictures.forEach(function(attachment) {
  //      var image = document.createElement('img');
  //      image.setAttribute('src', attachment.url);
  //      processImages.appendChild(image);
  //      // console.log(record.fields.ProcessPictures[attachment].url);
  //    });
  // }

 });
  }


    document.addEventListener('DOMContentLoaded', function (event) {
        // DOM Loaded!
        var searchParam = document.location.search;
        
        var slug = searchParam.substring(1);
        var recordID = slug.split('-').pop();
        // console.log(recordID);
        fetchRecord(slug, recordID);
      });


      // Record Test- recH3Rt0xupT6f8C4

///process.innerHTML=process.innerHTML + '   '  /// in order to add on to the innerhtml instead of overriding it