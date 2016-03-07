$( '#language' ).change(function() {
    $( 'select option:selected' ).each(function() {
        chrome.storage.sync.set({'language': $( this )[0].value}, function() {
            message('Language ' + $( this )[0].value + ' set');
        });
    });
});

$( '#enabled' ).change(function() {
    chrome.storage.sync.set({'enabled': $( this ).prop('checked')}, function() {
        message('Enabled ' + $( this ).prop('checked') + ' set');
    });
})

chrome.storage.sync.get('language', function(items) {
    language = items['language'];
    $( '#language' ).val(language);
});

chrome.storage.sync.get('enabled', function(items) {
    enabled = items['enabled'];
    if (enabled) {
        $( '#enabled' ).bootstrapToggle('on');
    }
    else {
        $( '#enabled' ).bootstrapToggle('off');
    }
});