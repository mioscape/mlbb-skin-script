$(document).ready(function() {
  const owner = 'mioscape'; // Replace with the actual owner of the repository
  const repo = 'mlbb-skin-script'; // Replace with the actual name of the repository

  const url = `https://api.github.com/repos/${owner}/${repo}/releases`;

  $.get(url)
    .done(function(releases) {
      const releaseList = $('#releaseList');
      releases.forEach(function(release) {
        const releaseName = release.name;
        const releaseURL = release.zipball_url;
        const releaseTag = release.tag_name;

        const listItem = $('<li></li>').addClass('release-item');
        const link = $('<a></a>').attr('href', releaseURL).text(`${releaseName} | ${releaseTag}`);

        listItem.append(link);
        releaseList.append(listItem);
      });
    })
    .fail(function(error) {
      console.error('Error:', error.responseJSON.message);
    });
    // Check system preference for dark mode
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkMode) {
    $('body').addClass('dark-mode');
  }
});
