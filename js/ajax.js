function ajaxFormRequest(form_id) {
    var forma = $("#" + form_id);
    var resp_text = $('#text_after_send');

    forma.submit(function() {
        $.ajax({
            type: "POST",
            url: "php/callback.php",
            data: $(this).serialize()
        }).done(function() {
            forma.css('display', 'none');
            // form_area.hide();
            resp_text.css('display', 'block');
        });
        return false;
    })

}