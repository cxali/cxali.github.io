function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('d-none');
    });

    // Remove active class from all list items
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('d-none');

    // Add active class to the clicked list item
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
}