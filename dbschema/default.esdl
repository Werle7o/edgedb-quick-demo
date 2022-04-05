module default {
    type Account {
        multi link watchlist -> default::Content;

        required property username -> std::str {
            constraint std::exclusive;
        };
    };

    abstract type Content {
        multi link actors -> default::Person {
            property character_name -> std::str;
        };

        required property title -> std::str;
    };

    type Movie extending default::Content {
        property release_year -> std::int32;
    };

    type Person {
        link filmography := (.<actors[is default::Content]);

        required property name -> std::str;
    };

    type Season {
        required link show -> default::Show;

        required property number -> std::int32;
    };

    type Show extending default::Content {
        property num_seasons := (std::count(.<show[is default::Season]));
    };
};
