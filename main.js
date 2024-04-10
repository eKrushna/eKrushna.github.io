
function show(){
    swal("Thank you!", "I'll contact you soon.", "success");
    document.getElementById('name').value = null;
    document.getElementById('email').value = null;
    document.getElementById('message').value = null;



}

// function sure(){
//     document.querySelector('#myForm').addEventListener('reset', function(e) {
//         e.preventDefault(); // Prevent form submission
//
//         swal({
//             title: 'Are you sure?',
//             text: 'You will not be able to recover this data!',
//             icon: 'warning',
//             buttons: ['No, cancel it!', 'Yes, I am sure!'],
//             dangerMode: true,
//             isConfirmed: false
//         }).then(function(isConfirmed) {
//             if (isConfirmed) {
//                 // User confirmed, reset the form
//                 document.querySelector('#myForm').reset();
//                 swal('Form Reset', 'Your form has been reset.', 'success');
//             } else {
//                 // User canceled, do nothing
//                 swal('Cancelled', 'Your data is safe.', 'error');
//             }
//         });
//     });
//
// }


