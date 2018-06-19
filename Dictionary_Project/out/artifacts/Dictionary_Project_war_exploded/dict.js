"use strict";

$(function () {
    var timeOutId = 0;
    var ajaxFn = function () {
        var txtSearch = $('#txtSearch').val();
        $.ajax({
            'url': 'GetDictionaryServlet',
            'data': {
                'txtSearch': txtSearch
            },
            'type': 'GET',
        }).done(ajaxSuccess)
            .fail(ajaxFailure)
            .always(function () {
                $("#loader").hide();
            });
    };
    $('#btnSearch').click(function () {
        $("#loader").show();
        timeOutId = setTimeout(ajaxFn, 500);
    });
});

function ajaxSuccess(data) {
    var definition = "";
    if (data.length > 0) {
        $.each(data, function (index, result) {
            definition += "<p>" + (index + 1) + "(" + result.wordType + ") :: " + result.definition + "</p>"
        });
        $('#searchResult').html(definition);
        $('#resultNotFound').css('display', 'none');
    } else {
        $('#searchResult').html("");
        $('#resultNotFound').css('display', 'block');
    }

}

function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}