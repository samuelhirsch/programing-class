/* global $ pcsMessageBox*/
(function () {

    const load = $('#loadbutton');
    const input = $('#loadinput');
    const refresh = $('#refresh');
    const filecontent=$('#content');
    load.on('click', (e) => {
        loadingfile(input.val());
        e.preventDefault();
    });
    refresh.on('click', () => { 
        filecontent.text('Your file content here');
        $('#loadform').trigger('reset');
    });


    async function loadingfile(file) {
        try {
            if (!file) {
                throw new Error('Please enter a file name');
            }
            const response = await fetch(file);
            const loadingicon = $('#loading').css('display', 'inline-block');
            if (!response.ok) {
                loadingicon.css('display', 'none');
                throw new Error(`${response.status} - ${response.statusText}`);
            }
            const myfIle = await response.text();
            loadingicon.css('display', 'none');
            filecontent.text(myfIle);
        } catch (error) {
            pcsMessageBox(error);
        }
    }
}());