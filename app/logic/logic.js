$(document).ready(function () {

  $('#submitBtn').on('click', function(){

    let userData = {
      name: $('#formName').val(),
      photo: $('#formPic').val(),
      survey: [
        $("input[name='question1']:checked").val(),
        $("input[name='question2']:checked").val(),
        $("input[name='question3']:checked").val(),
        $("input[name='question4']:checked").val(),
        $("input[name='question5']:checked").val(),
        $("input[name='question6']:checked").val(),
        $("input[name='question7']:checked").val(),
        $("input[name='question8']:checked").val(),
        $("input[name='question9']:checked").val(),
        $("input[name='question10']:checked").val(),
      ],
    };

    console.log(userData);

    if ((userData.name === '') || (userData.photo === '')) {
      alert('A name and photo are required before you can meet your new bestie!');
    }

//   else if (($("input[name='question3']:checked").val() === undefined) || ($("input[name='question2']:checked").val() === '') ||
//         ($("input[name='question3']:checked").val() === '') || ($("input[name='question4']:checked").val() === '') ||
//         ($("input[name='question5']:checked").val() === '') || ($("input[name='question6']:checked").val() === '') ||
//         ($("input[name='question7']:checked").val() === '') || ($("input[name='question8']:checked").val() === '') ||
//         ($("input[name='question9']:checked").val() === '') || ($("input[name='question10']:checked").val() === '')) {
//
//   alert('These questions were scientifically fomulated to pair you up with your Bestie! If you dont answer them all we here in the Bestie Unity Department - BUD for short, cant find you a new bestie!');
// }

    let url = '/api/friends';
    let data = userData;

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  });
});
