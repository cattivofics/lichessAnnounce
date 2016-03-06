$( "#language" ).change(function() {
    $( "select option:selected" ).each(function() {
        chrome.storage.sync.set({'language': $( this )[0].value}, function() {
            message('Language ' + $( this )[0].value + ' set');
        });
    });
});

chrome.storage.sync.get('language', function(items) {
    language = items['language'];
    $( "#language" ).val(language);
});