$(document).ready(function() {
    $.ajax({
        url: 'characters.json',
        dataType: 'json',
        success: function(data) {
            var $table = $('#characterTable tbody');
            var characterCountAM = 0;
            var characterCountNZ = 0;

            data.forEach(function(character) {
                var $row = $('<tr>');
                $row.append('<td>' + character.firstName + '</td>');
                $row.append('<td>' + character.lastName + '</td>');
                $row.append('<td>' + character.alias + '</td>');
                $row.append('<td>' + character.age + '</td>');
                $row.append('<td>' + character.team + '</td>');
                $row.append('<td>' + character.occupation + '</td>');
                $row.append('<td>' + character.description + '</td>');
                $row.append('<td>' + character.birthdate + '</td>'); // Display birthdate
                $table.append($row);

                var lastNameFirstChar = character.lastName.charAt(0).toUpperCase();
                if (lastNameFirstChar >= 'A' && lastNameFirstChar <= 'M') {
                    characterCountAM++;
                } else {
                    characterCountNZ++;
                }
            });

            updateFilterCounts();

            $('th').click(function() {
                var column = $(this).index();
                var sortDirection = $(this).attr('data-sort') || 'asc';

                var sortedRows = $table.find('tr').toArray().sort(function(a, b) {
                    var aValue = $(a).find('td').eq(column).text();
                    var bValue = $(b).find('td').eq(column).text();

                    if (column === 3) {
                        aValue = parseInt(aValue, 10);
                        bValue = parseInt(bValue, 10);
                    }

                    return (sortDirection === 'asc') ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                });

                sortDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
                $(this).attr('data-sort', sortDirection);

                $('th').not(this).removeAttr('data-sort').find('span').remove();

                var chevron = (sortDirection === 'asc') ? '&#x25B2;' : '&#x25BC;';
                $(this).append('<span style="float: right;">' + chevron + '</span>');

                $table.empty().append(sortedRows);
            });

            $('#search').on('input', function() {
                var searchTerm = $(this).val().toLowerCase();
                $table.find('tr').each(function() {
                    var firstName = $(this).find('td:first').text().toLowerCase();
                    if (firstName.includes(searchTerm)) {
                        $(this).addClass('highlighted');
                    } else {
                        $(this).removeClass('highlighted');
                    }
                });
            });

            $('#filterAM').on('click', function() {
                toggleCharacters('A', 'M');
            });

            $('#filterNZ').on('click', function() {
                toggleCharacters('N', 'Z');
            });

            function toggleCharacters(startChar, endChar) {
                $table.find('tr').each(function() {
                    var lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
                    var firstChar = lastName.charAt(0);
                    if (firstChar >= startChar && firstChar <= endChar) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
                updateFilterCounts();
            }

            function updateFilterCounts() {
                $('#filterAM').text('A - M (' + characterCountAM + ')');
                $('#filterNZ').text('N - Z (' + characterCountNZ + ')');
            }
        }
    });
});
