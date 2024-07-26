//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Get the select element and the button
    const colorSelect = document.getElementById("colorSelect");
    const removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');

    // Add event listener to the button
    removeButton.addEventListener("click", function() {
        // Get the selected option
        const selectedOption = colorSelect.options[colorSelect.selectedIndex];
        
        // Remove the selected option from the dropdown
        colorSelect.removeChild(selectedOption);
    });
});
