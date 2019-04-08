
*	To move to next field on Enter key press	*

<input type="text"  data-index="1"/>
<input type="txt" data-index="2" />
<input type="number" data-index="3" />


$('#inputform').on('keydown', 'input', function (event) {
    if (event.which == 13) {
        event.preventDefault();
        var $this = $(event.target);
        var index = parseFloat($this.attr('data-index'));
        $('[data-index="' + (index + 1).toString() + '"]').focus();
    }
});