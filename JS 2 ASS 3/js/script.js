$(document).ready(function () {
    function fetchTeamJSONUsingGetJSON() {
        $("#team").text("Loading...");
        setTimeout(function () {
            $.getJSON("team.json", function (data) {
                $("#team").empty();
                displayTeamData(data.members);
            });
        }, 3000);
    }
    function fetchTeamJSONUsingAjax() {
        $("#team").text("Loading...");
        setTimeout(function () {
            $.ajax({
                type: "GET",
                url: "team.json",
                dataType: "json",
                success: function (data) {
                    $("#team").empty();
                    displayTeamData(data.members);
                },
                error: function () {
                    $("#team").text("Error: Content could not be retrieved.");
                }
            });
        }, 3000);
    }
    function displayTeamData(members) {
        $("#team").empty();
        $.each(members, function (index, member) {
            var $memberDiv = $("<div>");
            $memberDiv.append("<h2>" + member.name + "</h2>");
            $memberDiv.append("<h5>" + member.position + "</h5>");
            $memberDiv.append("<p>" + member.bio + "</p>");
            $("#team").append($memberDiv);
        });
    }
    fetchTeamJSONUsingAjax();
});