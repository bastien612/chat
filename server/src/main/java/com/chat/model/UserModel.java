package com.chat.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="user_table")
public class UserModel extends AuditModel{

    @Id
    @GeneratedValue(generator = "product_generator")
    @SequenceGenerator(
            name="product_generator",
            sequenceName="product_sequence",
            initialValue=1
    )
    private Long id;

    @Column(columnDefinition = "name")
    private String name;

}
