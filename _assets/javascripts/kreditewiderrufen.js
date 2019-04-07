$( 'form#kreditwiderrufen' ).submit(function ( e ) {
    e.preventDefault();

    var form = document.querySelector("#kreditwiderrufen");
    var formdata = new FormData(form);
    // var url = 'http://localhost:3000/api/contacts';
    var url = 'http://staging-auto.kanzlei-fuer-widerruf.de/api/contacts';
    var documents = document.querySelector("#documents");
    var files = documents.files
    for (var i = 0; i < files.length; i++) {
        formdata.append('contact[documents][]', files[i], files[i]['name']);
    }
   
    // formdata.append('contact[documents]', documents.files[0], 'filename.txt');

    fetch(url, {
        method: "POST",
        // headers: { 'Content-Type':'multipart/form-data' },
        body: formdata,
    }).then(
        response => response.text() // .json(), etc.
        // same as function(response) {return response.text();}
    ).then(
        html => {
            console.log(html)
        }
    );
});
