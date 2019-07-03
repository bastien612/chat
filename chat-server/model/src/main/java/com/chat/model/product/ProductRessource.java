package com.chat.model.product;

import java.util.UUID;

public interface ProductRessource {
    String getName();

    void setName(String name);

    UUID getId();

    void setId(UUID id);
}
