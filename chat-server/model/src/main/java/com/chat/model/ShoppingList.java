package com.chat.model;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "shopping_list")
public class ShoppingList extends AuditModel {

    @Id
    private UUID id;

    @Column(columnDefinition = "text",name= "title")
    private String title;

//    @ManyToMany(mappedBy = "productLists")
//    private List<Product> products;
}