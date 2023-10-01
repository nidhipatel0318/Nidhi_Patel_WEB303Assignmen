// Function to load team data using $.ajax() (meets requirements with 3-second delay)
function loadTeamDataWithAjax() {
    // Display "Loading..." message
    $("#team p").text("Loading...");

    // Make an AJAX request using $.ajax()
    $.ajax({
        url: "team.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            // Delay for 3 seconds (3000 milliseconds) before displaying data
            setTimeout(function () {
                // Clear the "Loading..." message
                $("#team p").remove();

                // Loop through the team members and display their information
                $.each(data.members, function (index, member) {
                    var memberHtml =
                        "<div class='team-member'>" +
                        "<h2>" + member.name + "</h2>" +
                        "<h5>" + member.position + "</h5>" +
                        "<p>" + member.bio + "</p>" +
                        "</div>";

                    $("#team").append(memberHtml);
                });
            }, 3000); // 3-second delay
        },
        error: function () {
            // Display an error message immediately without any delay
            $("#team").html("<p>Error: Content could not be retrieved.</p>");
        }
    });
}

// Call the function to load and display team data
$(document).ready(function() {
    loadTeamDataWithAjax();
});
