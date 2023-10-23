// Define the ContentItem class
class ContentItem {
    constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    updateContentItem(id, name, description, category) {
        if (id === this.id) {
            if (name !== null) this.name = name;
            if (description !== null) this.description = description;
            if (category !== null) this.category = category;
        }
    }

    toString() {
        return `
            <div class="content-item-wrapper" id="content-item-${this.id}">
                <h4>${this.name}</h4>
                <p>${this.description}</p>
                <div>${this.category}</div>
            </div>
        `;
    }
}

// Create an array of ContentItems with a sports theme
const contentItems = [
    new ContentItem(0, "Football", "Exciting football match", "Soccer"),
    new ContentItem(1, "Basketball", "NBA highlights", "Basketball"),
    new ContentItem(2, "Tennis", "Wimbledon finals", "Tennis"),
    new ContentItem(3, "Golf", "PGA Tour championship", "Golf"),
    new ContentItem(4, "Baseball", "MLB action", "Baseball"),
];

$(document).ready(function () {
    // Display the theme name
    $("#theme-title").text("Sports Theme");

    // Add each content item to the page
    contentItems.forEach(function (item) {
        const html = item.toString();
        $("#content-item-list").append(html);

        // Apply styling using jQuery
        const contentItemWrapper = $(`#content-item-${item.id}`);
        contentItemWrapper.css({
            border: "2px solid #000",
            width: "300px",
            padding: "10px",
            margin: "10px auto",
        });
    });

    // Event handler for the successful update button
    $("#updateButton").click(function () {
        // Try to update a ContentItem successfully
        contentItems[0].updateContentItem(0, "Updated Football", null, null);
        // Re-render the updated item
        $("#content-item-0").replaceWith(contentItems[0].toString());
    });

    // Event handler for the unsuccessful update button (does nothing)
    $("#tryUpdateButton").click(function () {
        // Do nothing, so no update occurs
    });
});
