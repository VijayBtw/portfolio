function downloadResume() {
    // Assuming your resume file is named resume.pdf
    var resumeUrl = 'C:/Users/Dell/Desktop/portfolio/resume.pdf';

    // Creating a link element
    var downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.target = '_blank';

    // Creating a custom mouse event
    var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });

    // Triggering the click event to start the download
    downloadLink.dispatchEvent(event);
}
