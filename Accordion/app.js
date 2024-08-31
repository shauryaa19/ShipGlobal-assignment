document.addEventListener('DOMContentLoaded', () => {
    const collapsibleTitles = document.querySelectorAll('.collapsible-title');

    collapsibleTitles.forEach(title => {
        title.addEventListener('click', () => {
            const parentSection = title.parentElement;

            // Toggle the active class
            parentSection.classList.toggle('active');

            // Close other sections when one is opened
            collapsibleTitles.forEach(otherTitle => {
                if (otherTitle !== title && otherTitle.parentElement.classList.contains('active')) {
                    otherTitle.parentElement.classList.remove('active');
                }
            });
        });
    });
});
