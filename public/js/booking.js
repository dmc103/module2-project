document.addEventListener('DOMContentLoaded', () => {
    // to show and hide the destination select options by clicking departure label

    const departureLabel = document.getElementById('departureLabel');
    const departureOptions = document.getElementById('departureOptions');
    const departureSelect = document.getElementById('departureSelect');


    //converting the departure select options into a list
    departureLabel.addEventListener('click', () => {
        departureOptions.style.display = departureOptions.style.display === 'block' ? 'none' : 'block';
    });

    departureOptions.querySelectorAll('li').forEach(option => {
        option.addEventListener('click', (event) => {
            const value = event.target.getAttribute('data-value');
            departureSelect.value = value;
            departureOptions.style.display = 'none';

            const eventChange = new Event('change');
            departureSelect.dispatchEvent(eventChange);
        });

    });


    // to initially hide all departure images but show the default image
    document.querySelectorAll('.images-container img').forEach(img => img.style.display = 'none');

    document.getElementById('earth').style.display = 'block';

    document.getElementById('flightlogo').style.display = 'block';

    document.getElementById('departureSelect').addEventListener('change', event => {
        updateImageDisplay(event.target.value, 'departure-section');
    });

    document.getElementById('destinationSelect').addEventListener('change', event => {
        updateImageDisplay(event.target.value, 'destination-section');
    });

    // for the datepicker to open when the date label is clicked
    document.getElementById('depDate').addEventListener('click', () => {
        document.getElementById('departureDate').click();
    });

   


    const updateImageDisplay = (selection, section) => {

        //to hide the images from this section and show default image if the selection is empty
         document.querySelectorAll(`.${section} .images-container img`).forEach(img => img.style.display = 'none');
 
         if(!selection) {
             if (section === 'departure-section') {
                 document.getElementById('earth').style.display = 'block';
             } else if (section === 'destination-section') {
                 document.getElementById('flightlogo').style.display = 'block';
             }
             return;
             
         }
 
 
         // to determine which image to show
         let imageId;
         if (section === 'departure-section') {
             switch (selection) {
                case 'Texas, USA':
                    imageId = 'depUsa';
                    break;
                case 'Valencia, SPAIN':
                    imageId = 'depSpain';
                    break;
                case 'Mumbai, INDIA':
                    imageId = 'depIndia';
                    break;
                case 'Manila, PHILIPPINES':
                    imageId = 'depPhil';
                    break;
                case 'Stockholm, SWEDEN':
                    imageId = 'depSweden';
                    break;
             }
         } else {
            imageId = selection.toLowerCase();
         }
 
         // to show selected image
         const imageElement = document.getElementById(imageId);
         if (imageElement) {
             imageElement.style.display = 'block';
         }
     }
});


//to submit the booking form
document.getElementById('submitBtn').addEventListener('click', function () {
    document.getElementById('bookingForm').submit();
});

