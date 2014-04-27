window.sport.factory('category', function () {
    var groups = [
        {
            category: "Cycling jersey",
            sub: ["Longsleeve suit",
                "Shortsleeve suit",
                "Windbreaker"
            ]
        },
        {
            category: "Wrestling jersey",
            sub: ["wrestling jersey", "Boxing pants"]
        },
        {
            category: "Racing jersey", //todo:using Jersey for ball game/Racing jersey
            sub: ["Running jersey",
                "Soccer jersey",
                "Basketball jersey",
                "Rugby jersey",
                "Hockey jersey",
                "Triathlon jersey"
            ]
        },
        {
            category: "Casual Sports Apparel",
            sub: ["Golf suit",
                "Yoga jersey",
                "Darts jersey",
                "Roller skating jersey",
                "Baseball Jersey"
            ]
        },
        {
            category: "Accessories",
            sub: ["Hermit and glove",
                "Cycling sleeves(arm&leg)",
                "Flag",
                "Headband"
            ]
        }
    ];

    var getUrl = function (category, sub) {
        var cate = category.replace(' ', '-');
        var item = sub.replace(' ', '-');
        return "#/" + cate + "/" + item;
    };

    _.each(groups, function (group) {
        var category = group.category;

        group.subWithLink = [];
        group.categoryWithLink = {
            category: category,
            link: "#/" + category.replace(' ', '-')
        };

        _.each(group.sub, function (item) {
            group.subWithLink.push({
                sub: item,
                link: getUrl(category, item)
            });
        })
    });

    return groups;

});
