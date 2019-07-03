package com.chat.model.product;

import com.chat.model.AuditModel;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "product")
public class Product extends AuditModel implements ProductRessource {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(columnDefinition = "name")
    private String name;

//    @ManyToMany(cascade = CascadeType.ALL)
//    @JoinTable(
//            name = "rel_category_product",
//            joinColumns = {@JoinColumn(name = "product_id")},
//            inverseJoinColumns = {@JoinColumn(name = "category_id")}
//
//    )
//    private Set<CategoryModel> categories;

//    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
//    @JoinTable(
//            name = "rel_product_list",
//            joinColumns = {@JoinColumn(name = "product_id")},
//            inverseJoinColumns = {@JoinColumn(name = "product_list_id")}
//    )
//    private Set<ShoppingList> productLists = new HashSet<ShoppingList>();

    public Product() {
    }

    public Product(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public UUID getId() {
        return id;
    }

    @Override
    public void setId(UUID id) {
        this.id = id;
    }

//    public Set<CategoryModel> getCategories() {
//        return categories;
//    }
//
//    public void setCategories(Set<CategoryModel> categories) {
//        this.categories = categories;
//    }

//    public Set<ShoppingList> getProductLists() {
//        return productLists;
//    }
//
//    public void setProductLists(Set<ShoppingList> productLists) {
//        this.productLists = productLists;
//    }

}
