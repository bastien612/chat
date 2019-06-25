CREATE TABLE shopping_list (
    id UUID PRIMARY KEY,
    title text,
    created_at timestamp,
    updated_at timestamp
);

CREATE TABLE product (
    id UUID PRIMARY KEY,
    name text,
    created_at timestamp,
    updated_at timestamp
);