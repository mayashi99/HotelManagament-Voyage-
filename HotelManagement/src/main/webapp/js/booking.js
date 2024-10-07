
        document.getElementById('bookingForm').addEventListener('submit', function(event) {
            let valid = true;

            // Name validation
            const name = document.getElementById('name').value;
            if (name.trim() === "") {
                valid = false;
                document.getElementById('nameError').innerText = "Name is required.";
            } else {
                document.getElementById('nameError').innerText = "";
            }

            // Phone number validation
            const phone = document.getElementById('phone').value;
            const phonePattern = /^[0-9]{10,15}$/; // Adjust pattern as needed for international numbers
            if (!phone.match(phonePattern)) {
                valid = false;
                document.getElementById('phoneError').innerText = "Invalid phone number.";
            } else {
                document.getElementById('phoneError').innerText = "";
            }

            // Email validation
            const email = document.getElementById('email').value;
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                valid = false;
                document.getElementById('emailError').innerText = "Invalid email format.";
            } else {
                document.getElementById('emailError').innerText = "";
            }

            // Room type validation
            const roomType = document.getElementById('roomType').value;
            if (roomType === "") {
                valid = false;
                document.getElementById('roomTypeError').innerText = "Please select a room type.";
            } else {
                document.getElementById('roomTypeError').innerText = "";
            }

            // Number of adults validation
            const numAdults = document.getElementById('numAdults').value;
            if (numAdults === "" || numAdults < 1) {
                valid = false;
                document.getElementById('numAdultsError').innerText = "Please enter a valid number of adults.";
            } else {
                document.getElementById('numAdultsError').innerText = "";
            }

            // Number of children validation
            const numChildren = document.getElementById('numChildren').value;
            if (numChildren === "") {
                valid = false;
                document.getElementById('numChildrenError').innerText = "Please enter a valid number of children.";
            } else {
                document.getElementById('numChildrenError').innerText = "";
            }

            // Arrival date validation
            const arrivalDate = document.getElementById('arrivalDate').value;
            if (arrivalDate === "") {
                valid = false;
                document.getElementById('arrivalDateError').innerText = "Arrival date is required.";
            } else {
                document.getElementById('arrivalDateError').innerText = "";
            }

            // Departure date validation
            const departureDate = document.getElementById('departureDate').value;
            if (departureDate === "") {
                valid = false;
                document.getElementById('departureDateError').innerText = "Departure date is required.";
            } else if (new Date(departureDate) <= new Date(arrivalDate)) {
                valid = false;
                document.getElementById('departureDateError').innerText = "Departure date must be after the arrival date.";
            } else {
               document.getElementById('departureDateError').innerText = "";
            }

            // Pickup validation
            const pickupYes = document.getElementById('pickupYes').checked;
            const pickupNo = document.getElementById('pickupNo').checked;
            if (!pickupYes && !pickupNo) {
                valid = false;
                document.getElementById('pickupError').innerText = "Please select a pickup option.";
            } else {
                document.getElementById('pickupError').innerText = "";
            }

            if (!valid) {
                event.preventDefault();
            }
        });

